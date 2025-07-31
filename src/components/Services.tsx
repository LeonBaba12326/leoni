@@ .. @@
           <div className="inline-flex items-center gap-3 mb-6">
             <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
-            <span className="text-red-500 font-medium tracking-wider text-sm uppercase">Our Services</span>
+            <span className="text-red-500 font-medium tracking-wider text-sm uppercase">Shërbimet Tona</span>
             <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
           </div>
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
-            Full-Service Video Production
+            Prodhim i Plotë Videosh
           </h2>
           <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
-            From concept development to final delivery, we provide comprehensive video production services 
-            that bring your vision to life with professional excellence.
+            Nga zhvillimi i konceptit tek dorëzimi final, ne ofrojmë shërbime gjithëpërfshirëse të prodhimit të videove 
+            që e sjellin vizionin tuaj në jetë me përsosmëri profesionale.
           </p>
         </div>
@@ .. @@
     {
       icon: Video,
-      title: 'Commercial Production',
-      description: 'High-impact commercials that drive brand awareness and conversions with cinematic quality.',
-      features: ['Brand Commercials', 'Product Videos', 'TV Spots', 'Digital Ads']
+      title: 'Prodhim Reklamash',
+      description: 'Reklama me ndikim të lartë që shtyjnë ndërgjegjësimin e markës dhe konvertimet me cilësi kinematografike.',
+      features: ['Reklama Marke', 'Video Produktesh', 'Spot Televiziv', 'Reklama Dixhitale']
     },
     {
       icon: Camera,
-      title: 'Corporate Videos',
-      description: 'Professional corporate content that communicates your message with clarity and impact.',
-      features: ['Company Profiles', 'Training Videos', 'Internal Communications', 'Testimonials']
+      title: 'Video Korporative',
+      description: 'Përmbajtje korporative profesionale që komunikon mesazhin tuaj me qartësi dhe ndikim.',
+      features: ['Profile Kompanie', 'Video Trajnimi', 'Komunikime të Brendshme', 'Dëshmi']
     },
     {
       icon: Edit,
-      title: 'Documentary Films',
-      description: 'Compelling documentary storytelling that captures authentic moments and real stories.',
-      features: ['Feature Documentaries', 'Short Films', 'Interview Series', 'Event Documentation']
+      title: 'Filma Dokumentarë',
+      description: 'Tregim dokumentar bindës që kap momente autentike dhe histori të vërteta.',
+      features: ['Dokumentarë të Plotë', 'Filma të Shkurtër', 'Seri Intervistash', 'Dokumentim Ngjarjesh']
     },
     {
       icon: Mic,
-      title: 'Music Videos',
-      description: 'Creative music videos that bring artists\' vision to life with stunning visuals.',
-      features: ['Performance Videos', 'Narrative Concepts', 'Live Sessions', 'Lyric Videos']
+      title: 'Video Muzikore',
+      description: 'Video muzikore kreative që e sjellin vizionin e artistëve në jetë me pamje mahnitëse.',
+      features: ['Video Performancash', 'Koncepte Narrative', 'Sesione të Drejtpërdrejta', 'Video Tekstesh']
     },
     {
       icon: Palette,
-      title: 'Post-Production',
-      description: 'Complete post-production services from editing to color grading and sound design.',
-      features: ['Video Editing', 'Color Grading', 'Sound Design', 'Motion Graphics']
+      title: 'Post-Prodhim',
+      description: 'Shërbime të plota post-prodhimi nga editimi tek gradimi i ngjyrave dhe dizajni i zërit.',
+      features: ['Editim Videosh', 'Gradim Ngjyrash', 'Dizajn Zëri', 'Grafika Lëvizëse']
     },
     {
       icon: Globe,
-      title: 'Live Streaming',
-      description: 'Professional live streaming solutions for events, conferences, and broadcasts.',
-      features: ['Multi-Camera Setup', 'Live Switching', 'Streaming Platforms', 'Interactive Features']
+      title: 'Transmetim i Drejtpërdrejtë',
+      description: 'Zgjidhje profesionale transmetimi të drejtpërdrejtë për ngjarje, konferenca dhe transmetime.',
+      features: ['Konfigurimi Multi-Kamerë', 'Ndërrimi i Drejtpërdrejtë', 'Platforma Transmetimi', 'Veçori Interaktive']
     }
   ];
@@ .. @@
           <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm max-w-4xl mx-auto">
-            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
+            <h3 className="text-2xl font-bold text-white mb-4">Gati të Filloni Projektin Tuaj?</h3>
             <p className="text-gray-400 mb-6">
-              Let's discuss how we can bring your vision to life with our professional video production services.
+              Le të diskutojmë se si mund ta sjellim vizionin tuaj në jetë me shërbimet tona profesionale të prodhimit të videove.
             </p>
             <button
               onClick={() => {
@@ -133,7 +133,7 @@ const Services: React.FC = () => {
               }}
               className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25 transform hover:scale-105"
             >
-              Get Free Consultation
+              Merr Konsultim Falas
             </button>
           </div>
         </div>