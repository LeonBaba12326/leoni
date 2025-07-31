@@ .. @@
           <div className="inline-flex items-center gap-3 mb-6">
             <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
-            <span className="text-red-500 font-medium tracking-wider text-sm uppercase">Get In Touch</span>
+            <span className="text-red-500 font-medium tracking-wider text-sm uppercase">Na Kontaktoni</span>
             <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
           </div>
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
-            Let's Create Something Amazing
+            Le të Krijojmë Diçka të Mrekullueshme
           </h2>
           <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
-            Ready to bring your vision to life? Get in touch with our team to discuss your next video project.
+            Gati ta sjellni vizionin tuaj në jetë? Kontaktoni ekipin tonë për të diskutuar projektin tuaj të ardhshëm të videos.
           </p>
         </div>
@@ .. @@
           <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
-            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
+            <h3 className="text-2xl font-bold text-white mb-6">Na dërgoni një mesazh</h3>
             
             {isSubmitted ? (
               <div className="text-center py-12">
                 <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
-                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
-                <p className="text-gray-400">Thank you for reaching out. We'll get back to you within 24 hours.</p>
+                <h4 className="text-xl font-bold text-white mb-2">Mesazhi u Dërgua!</h4>
+                <p className="text-gray-400">Faleminderit që na kontaktuat. Do t'ju përgjigjemi brenda 24 orëve.</p>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
@@ .. @@
                   <div>
                     <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
-                      Full Name *
+                      Emri i Plotë *
                     </label>
                     <input
                       type="text"
@@ -50,13 +50,13 @@ const Contact: React.FC = () => {
                       value={formData.name}
                       onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200"
-                      placeholder="Your full name"
+                      placeholder="Emri juaj i plotë"
                     />
                   </div>
                   <div>
                     <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
-                      Email Address *
+                      Adresa Email *
                     </label>
                     <input
                       type="email"
@@ -66,7 +66,7 @@ const Contact: React.FC = () => {
                       value={formData.email}
                       onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200"
-                      placeholder="your@email.com"
+                      placeholder="juaj@email.com"
                     />
                   </div>
                 </div>
@@ .. @@
                   <div>
                     <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
-                      Company
+                      Kompania
                     </label>
                     <input
                       type="text"
@@ -76,13 +76,13 @@ const Contact: React.FC = () => {
                       value={formData.company}
                       onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200"
-                      placeholder="Your company name"
+                      placeholder="Emri i kompanisë suaj"
                     />
                   </div>
                   <div>
                     <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
-                      Service Needed
+                      Shërbimi i Nevojshëm
                     </label>
                     <select
                       id="service"
@@ -91,15 +91,15 @@ const Contact: React.FC = () => {
                       onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200"
                     >
-                      <option value="">Select a service</option>
-                      <option value="commercial">Commercial Production</option>
-                      <option value="corporate">Corporate Videos</option>
-                      <option value="documentary">Documentary Films</option>
-                      <option value="music">Music Videos</option>
-                      <option value="post-production">Post-Production</option>
-                      <option value="live-streaming">Live Streaming</option>
-                      <option value="other">Other</option>
+                      <option value="">Zgjidhni një shërbim</option>
+                      <option value="commercial">Prodhim Reklamash</option>
+                      <option value="corporate">Video Korporative</option>
+                      <option value="documentary">Filma Dokumentarë</option>
+                      <option value="music">Video Muzikore</option>
+                      <option value="post-production">Post-Prodhim</option>
+                      <option value="live-streaming">Transmetim i Drejtpërdrejtë</option>
+                      <option value="other">Tjetër</option>
                     </select>
                   </div>
                 </div>
@@ .. @@
                 <div>
                   <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
-                    Project Budget
+                    Buxheti i Projektit
                   </label>
                   <select
                     id="budget"
@@ -109,12 +109,12 @@ const Contact: React.FC = () => {
                     onChange={handleInputChange}
                     className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200"
                   >
-                    <option value="">Select budget range</option>
+                    <option value="">Zgjidhni gamën e buxhetit</option>
                     <option value="5k-10k">$5,000 - $10,000</option>
                     <option value="10k-25k">$10,000 - $25,000</option>
                     <option value="25k-50k">$25,000 - $50,000</option>
                     <option value="50k-100k">$50,000 - $100,000</option>
                     <option value="100k+">$100,000+</option>
                   </select>
                 </div>
@@ .. @@
                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
-                    Project Details *
+                    Detajet e Projektit *
                   </label>
                   <textarea
                     id="message"
@@ -125,7 +125,7 @@ const Contact: React.FC = () => {
                     value={formData.message}
                     onChange={handleInputChange}
                     className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200 resize-none"
-                    placeholder="Tell us about your project, timeline, and any specific requirements..."
+                    placeholder="Na tregoni për projektin tuaj, afatin kohor dhe çdo kërkesë specifike..."
                   />
                 </div>
@@ .. @@
                   className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25 transform hover:scale-105 flex items-center justify-center gap-3"
                 >
                   <Send className="w-5 h-5" />
-                  <span>Send Message</span>
+                  <span>Dërgo Mesazhin</span>
                 </button>
               </form>
             )}
@@ .. @@
           <div className="space-y-8">
             <div>
-              <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
+              <h3 className="text-2xl font-bold text-white mb-6">Na kontaktoni</h3>
               <p className="text-gray-400 leading-relaxed mb-8">
-                We're here to help bring your vision to life. Whether you have a specific project in mind 
-                or just want to explore possibilities, we'd love to hear from you.
+                Ne jemi këtu për t'ju ndihmuar ta sjellni vizionin tuaj në jetë. Qoftë se keni një projekt specifik në mendje 
+                apo thjesht doni të eksploroni mundësitë, do të donim të dëgjonim prej jush.
               </p>
             </div>
@@ .. @@
   const contactInfo = [
     {
       icon: Mail,
-      title: 'Email Us',
+      title: 'Na Shkruani Email',
       details: 'hello@elsaproduction.com',
-      description: 'Send us an email anytime'
+      description: 'Na dërgoni email në çdo kohë'
     },
     {
       icon: Phone,
-      title: 'Call Us',
+      title: 'Na Telefononi',
       details: '+1 (555) 123-4567',
-      description: 'Mon-Fri from 9am to 6pm'
+      description: 'Hën-Pre nga 9:00 deri 18:00'
     },
     {
       icon: MapPin,
-      title: 'Visit Us',
+      title: 'Na Vizitoni',
       details: 'Los Angeles, CA',
-      description: 'Studio visits by appointment'
+      description: 'Vizita në studio me takim'
     },
     {
       icon: Clock,
-      title: 'Response Time',
-      details: '24 Hours',
-      description: 'We respond within one business day'
+      title: 'Koha e Përgjigjes',
+      details: '24 Orë',
+      description: 'Përgjigjemi brenda një dite pune'
     }
   ];
@@ .. @@
             <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
-              <h4 className="text-lg font-semibold text-white mb-4">What happens next?</h4>
+              <h4 className="text-lg font-semibold text-white mb-4">Çfarë ndodh më pas?</h4>
               <div className="space-y-3 text-gray-400 text-sm">
                 <div className="flex items-start gap-3">
                   <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                     <span className="text-white text-xs font-bold">1</span>
                   </div>
-                  <p>We'll review your project details and get back to you within 24 hours</p>
+                  <p>Do të rishikojmë detajet e projektit tuaj dhe do t'ju përgjigjemi brenda 24 orëve</p>
                 </div>
                 <div className="flex items-start gap-3">
                   <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                     <span className="text-white text-xs font-bold">2</span>
                   </div>
-                  <p>Schedule a consultation call to discuss your vision and requirements</p>
+                  <p>Planifikojmë një thirrje konsultimi për të diskutuar vizionin dhe kërkesat tuaja</p>
                 </div>
                 <div className="flex items-start gap-3">
                   <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                     <span className="text-white text-xs font-bold">3</span>
                   </div>
-                  <p>Receive a detailed proposal with timeline and pricing</p>
+                  <p>Merrni një propozim të detajuar me afat kohor dhe çmim</p>
                 </div>
               </div>
             </div>