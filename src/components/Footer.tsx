@@ .. @@
   const quickLinks = [
-    { name: 'Home', id: 'home' },
-    { name: 'Services', id: 'services' },
-    { name: 'Portfolio', id: 'portfolio' },
-    { name: 'About', id: 'about' },
-    { name: 'Contact', id: 'contact' }
+    { name: 'Kryefaqja', id: 'home' },
+    { name: 'Shërbimet', id: 'services' },
+    { name: 'Portofoli', id: 'portfolio' },
+    { name: 'Rreth Nesh', id: 'about' },
+    { name: 'Kontakti', id: 'contact' }
   ];
 
   const services = [
-    'Commercial Production',
-    'Corporate Videos',
-    'Documentary Films',
-    'Music Videos',
-    'Post-Production',
-    'Live Streaming'
+    'Prodhim Reklamash',
+    'Video Korporative',
+    'Filma Dokumentarë',
+    'Video Muzikore',
+    'Post-Prodhim',
+    'Transmetim i Drejtpërdrejtë'
   ];
@@ .. @@
             </div>
             <p className="text-gray-400 mb-6 leading-relaxed">
-              Creating compelling visual narratives that captivate audiences and drive results. 
-              From concept to final cut, we deliver excellence in every frame.
+              Duke krijuar narrativa vizuale bindëse që magjepsin audiencën dhe sjellin rezultate. 
+              Nga koncepti tek prerja finale, ne ofrojmë përsosmëri në çdo kornizë.
             </p>
             <div className="flex gap-4">
@@ .. @@
          {/* Quick Links */}
          <div>
-            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
+            <h4 className="text-lg font-semibold text-white mb-6">Lidhje të Shpejta</h4>
             <ul className="space-y-3">
               {quickLinks.map((link, index) => (
@@ .. @@
          {/* Services */}
          <div>
-            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
+            <h4 className="text-lg font-semibold text-white mb-6">Shërbimet</h4>
             <ul className="space-y-3">
               {services.map((service, index) => (
@@ .. @@
         {/* Contact Info */}
         <div>
-            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
+            <h4 className="text-lg font-semibold text-white mb-6">Informacioni i Kontaktit</h4>
             <div className="space-y-4">
               <div className="flex items-start gap-3">
                 <Mail className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                 <div>
-                  <p className="text-gray-400 text-sm">Email</p>
+                  <p className="text-gray-400 text-sm">Email</p>
                   <a href="mailto:hello@elsaproduction.com" className="text-white hover:text-red-400 transition-colors duration-200">
                     hello@elsaproduction.com
                   </a>
@@ .. @@
               <div className="flex items-start gap-3">
                 <Phone className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                 <div>
-                  <p className="text-gray-400 text-sm">Phone</p>
+                  <p className="text-gray-400 text-sm">Telefon</p>
                   <a href="tel:+15551234567" className="text-white hover:text-red-400 transition-colors duration-200">
                     +1 (555) 123-4567
                   </a>
@@ .. @@
               <div className="flex items-start gap-3">
                 <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                 <div>
-                  <p className="text-gray-400 text-sm">Location</p>
+                  <p className="text-gray-400 text-sm">Vendndodhja</p>
                   <p className="text-white">Los Angeles, CA</p>
                 </div>
               </div>
@@ .. @@
             </div>
             <div className="flex gap-6 text-sm">
               <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
-                Privacy Policy
+                Politika e Privatësisë
               </a>
               <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
-                Terms of Service
+                Kushtet e Shërbimit
               </a>
               <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
-                Cookie Policy
+                Politika e Cookies
               </a>
             </div>
           </div>