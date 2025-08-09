# Static Site Hosting with Google Storage

*Published: August 5, 2025*  
*Category: How Tos, Google Cloud*

## Introduction
I've had a lot of fun setting up this little website.  Even as a seasoned engineer in the enterprise space, I had such a "wow, this is so cool!" feeling when I first got my site live, and knew immediately that I wanted to share that experience.  Naturally though, like many, my brain got distracted by other aspects of this project: filling out other content on my site, creating and deploying another Spring Boot app to showcase, that my configuration (particularly the ALB) has grown significantly more complex since I first got it up and running.  Still, I want to do my best to share what I learned/how I did it so that others can partake in the joy of creating and publishing content all on your own on the internet.

## Content Creation
I want to be very upfront about something: I have used the assistance of Claude Code <i>a lot</i> in the course of developing this site.  I won't go into the depths here (I'll save it for another post), but the tl;dr is that I was able to get a professional looking site generated pretty quick and easily. I knew what I wanted, described it in detailed written form, and asked claude to create the static site.  It's not that I couldn't do that myself, moreso that I didn't have the time available to do it; I used the LLM as a productivity tool to do it faster, then refined the output to get the last ~10% polished (and I think we all should).  I don't think that means anyone should go around [giving LLMs unfettered access to prod](https://www.pcmag.com/news/vibe-coding-fiasco-replite-ai-agent-goes-rogue-deletes-company-database) or even applying suggested actions without really understanding what they're doing.  This is just an evolved and hyper-contextualized version of stackoverflow. <code><\/soapbox></code>.

## Resources
I didn't do anything revolutionary, I think all the steps I used I got out of a handful of how-to's:
* [Google: Hosting a Static Website](https://cloud.google.com/storage/docs/hosting-static-website)
* [Github: Cloud Storage Uploader](https://github.com/marketplace/actions/cloud-storage-uploader)
    * Enables automated updates of my source-controlled site

<strong><i>"But I don't want to use Google, I only know how to use OtherCloud..."</i></strong> <br />
Yeah - that's kinda the point.  I'd say the ability to flex and learn about a different cloud provider than your native is vastly more useful than any of the more mundane tasks that some are so hesitant to relinquish to LLM powered assistance.

## Enough Already, Give Me Steps
### Create some public content
1. Sign up for Google Cloud. You can get a [free trial](https://console.cloud.google.com/freetrial?_gl=1*5ra6va*_up*MQ..&gclid=EAIaIQobChMIxruC9qj1jgMVRoFaBR2psjDdEAAYASAAEgLcDvD_BwE&gclsrc=aw.ds&facet_utm_source=%28not%2520set%29&facet_utm_campaign=%28not%2520set%29&facet_utm_medium=%28not%2520set%29&facet_url=https%3A%2F%2Fcloud.google.com%2Fpricing&facet_id_list=%5B105572947%5D) or [$300 Free Credit](https://cloud.google.com/pricing?_gl=1*76don5*_up*MQ..&gclid=EAIaIQobChMIxruC9qj1jgMVRoFaBR2psjDdEAAYASAAEgLcDvD_BwE&gclsrc=aw.ds) (not an affiliate link)
   1. Ensure billing is enabled
3. Create a Cloud Storage Bucket [here](https://console.cloud.google.com/storage/)
3. Upload your files (not a bad idea to start with <code>Hello World</code> in an <code>index.html</code> file)
4. Make your content publicly accessible
   1. Buckets > MyBucket > Permissions
   2. Click and confirm "Remove public access prevention" if necessary.
   3. Click the +Grant Access button and grant <code>Storage Object Viewer</code> to <code>allUsers</code>

At this point you can get a publicly accessible link to your file from the console, like [this](https://storage.googleapis.com/cbulloss/index.html).   If you wanted to you could stop here, and just use those public urls or even share it using a short url and call it a day.  But I wanted to give this a little more panache so...

5. Configure specialty pages (I skipped this and had to come back, just do it now).
   1. On the main buckets page (not inside your bucket), click the 3-dots button
   2. Click <strong>Edit Website Configuration</strong> within the context menu
   3. Type in <code>index.html</code> or otherwise 

### Expose it via your domain
1. Search for and register a domain in [https://console.cloud.google.com/net-services/domains/registrations/list](Google Console)
   1. There's a wide range of costs - I was able to secure mine for $12.
   2. Note that `.com` and `.net` domains allow you to keep more of your registration information private.
2. When setting up your domain, using Cloud DNS is recommended, but if you have an alternative DNS provider you'd like to use Google supports that as well.
3. You have to verify your email address before your registration can be finalized
4. Setup a load balancer
   1. Open [load balancing](https://console.cloud.google.com/net-services/loadbalancing/list) in the console
   2. Create an HTTP/HTTPS load balancer, Click Configure
   3. Give it a name like `cbulloss-alb`
   4. Select HTTPS protocol
   5. Select IPv4
   6. For IP address:
      1. In the drop-down, click Create IP address.
      2. Provide a basic name like `cbulloss-static-site-ip`
      3. Click Reserve.
      4. Make note of the reserved IP assigned to your load balancer - you'll need it later.
   7. Select port 443
   8. Create a new Google Managed SSL certificate
   9. Click Backend configuration.
   10. In the Backend services & backend buckets dropdown, select your bucket
   11. Skip routing rules configuration, review & finalize your lb
   12. Navigate to Cloud DNS, open the DNS for your domain
   13. Create an A record 
       1. Click on `+ Add Standard`
       2. Leave DNS Name empty (just your regular domain)
       3. Type: A
       4. Standard 5 minute TTL is sufficient
       5. Input the IP of your load balancer from above
       6. Click create


After following all these steps, it will take some time for your SSL certificate to be processed and your site to be available, I was working at night and found mine was available the next day.

<!-- TODO -->
### The last hurdle: Github Actions for automated deployment
