@@ .. @@
           <div className="inline-flex items-center gap-3 mb-6">
             <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
-            <span className="text-red-500 font-medium tracking-wider text-sm uppercase">About Us</span>
+            <span className="text-red-500 font-medium tracking-wider text-sm uppercase">Rreth Nesh</span>
             <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
           </div>
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
-            Crafting Visual Stories
+            Duke Krijuar Histori Vizuale
           </h2>
         </div>
@@ .. @@
           <div>
             <h3 className="text-3xl font-bold text-white mb-6">
-              Where Creativity Meets <span className="text-red-500">Technical Excellence</span>
+              Ku Kreativiteti Takon <span className="text-red-500">Përsosmërinë Teknike</span>
             </h3>
             <div className="space-y-6 text-gray-400 leading-relaxed">
               <p>
-                Elsa Production is a premier video production agency dedicated to creating compelling visual narratives 
-                that captivate audiences and drive results. Founded with a passion for storytelling and a commitment 
-                to excellence, we've grown into a trusted partner for brands, businesses, and creators worldwide.
+                Elsa Production është një agjenci kryesore e prodhimit të videove e përkushtuar për krijimin e narrativave vizuale bindëse 
+                që magjepsin audiencën dhe sjellin rezultate. E themeluar me pasion për tregimin e historive dhe përkushtim 
+                ndaj përsosmërisë, ne jemi rritur në një partner të besueshëm për marka, biznese dhe krijues në mbarë botën.
               </p>
               <p>
-                Our team of experienced filmmakers, editors, and creative professionals brings together diverse 
-                backgrounds and expertise to deliver exceptional video content across all genres and platforms. 
-                From concept development to final delivery, we handle every aspect of the production process 
-                with meticulous attention to detail.
+                Ekipi ynë i kineastëve me përvojë, editorëve dhe profesionistëve kreativë sjell së bashku sfonde të ndryshme 
+                dhe ekspertizë për të ofruar përmbajtje video të jashtëzakonshme në të gjitha zhanret dhe platformat. 
+                Nga zhvillimi i konceptit tek dorëzimi final, ne trajtojmë çdo aspekt të procesit të prodhimit 
+                me vëmendje të hollësishme ndaj detajeve.
               </p>
               <p>
-                What sets us apart is our ability to understand each client's unique vision and translate it into 
-                powerful visual stories that resonate with their target audience. We believe that great video 
-                production is not just about technical proficiency—it's about creating emotional connections 
-                that inspire action.
+                Ajo që na dallon është aftësia jonë për të kuptuar vizionin unik të çdo klienti dhe ta përkthejmë atë në 
+                histori vizuale të fuqishme që rezonojnë me audiencën e tyre të synuar. Ne besojmë se prodhimi i mirë i videove 
+                nuk është vetëm për aftësinë teknike—është për krijimin e lidhjeve emocionale 
+                që frymëzojnë veprimin.
               </p>
             </div>
           </div>
@@ .. @@
   const stats = [
-    { icon: Award, number: '8+', label: 'Years Experience' },
-    { icon: Users, number: '50+', label: 'Happy Clients' },
-    { icon: Camera, number: '150+', label: 'Projects Completed' },
-    { icon: Zap, number: '5M+', label: 'Views Generated' }
+    { icon: Award, number: '8+', label: 'Vite Përvojë' },
+    { icon: Users, number: '50+', label: 'Klientë të Kënaqur' },
+    { icon: Camera, number: '150+', label: 'Projekte të Përfunduara' },
+    { icon: Zap, number: '5M+', label: 'Shikime të Gjeneruara' }
   ];
 
   const values = [
     {
-      title: 'Creative Excellence',
-      description: 'We push creative boundaries to deliver visually stunning content that stands out in today\'s competitive landscape.'
+      title: 'Përsosmëri Kreative',
+      description: 'Ne shtyjmë kufijtë kreativë për të ofruar përmbajtje vizualisht mahnitëse që dallon në peizazhin konkurrues të sotëm.'
     },
     {
-      title: 'Technical Mastery',
-      description: 'Our team combines artistic vision with cutting-edge technology to produce professional-grade video content.'
+      title: 'Mjeshtëri Teknike',
+      description: 'Ekipi ynë kombinon vizionin artistik me teknologjinë më të avancuar për të prodhuar përmbajtje video me cilësi profesionale.'
     },
     {
-      title: 'Client Partnership',
-      description: 'We work closely with our clients as partners, ensuring their vision is realized while exceeding expectations.'
+      title: 'Partneritet me Klientin',
+      description: 'Ne punojmë ngushtë me klientët tanë si partnerë, duke siguruar që vizioni i tyre të realizohet duke tejkaluar pritshmëritë.'
     },
     {
-      title: 'Timely Delivery',
-      description: 'We understand the importance of deadlines and consistently deliver high-quality work on time and within budget.'
+      title: 'Dorëzim në Kohë',
+      description: 'Ne kuptojmë rëndësinë e afateve dhe vazhdimisht ofrojmë punë me cilësi të lartë në kohë dhe brenda buxhetit.'
     }
   ];
@@ .. @@
         <div>
-          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h3>
+          <h3 className="text-3xl font-bold text-white text-center mb-12">Vlerat Tona Kryesore</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {values.map((value, index) => (
               <div>
@@ .. @@
         <div className="text-center mt-16">
           <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm max-w-4xl mx-auto">
-            <h3 className="text-2xl font-bold text-white mb-4">Ready to Work with Our Team?</h3>
+            <h3 className="text-2xl font-bold text-white mb-4">Gati të Punoni me Ekipin Tonë?</h3>
             <p className="text-gray-400 mb-6">
-              Let's collaborate to bring your vision to life with our expertise and creative passion.
+              Le të bashkëpunojmë për ta sjellë vizionin tuaj në jetë me ekspertizën tonë dhe pasionin kreativ.
             </p>
             <button
               onClick={() => {
@@ -108,7 +108,7 @@ const About: React.FC = () => {
               }}
               className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25 transform hover:scale-105"
             >
-              Let's Talk
+              Le të Flasim
             </button>
           </div>
         </div>