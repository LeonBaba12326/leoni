@@ .. @@
           {/* Desktop Navigation */}
           <nav className="hidden md:flex items-center gap-8">
-            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
+            {['Kryefaqja', 'Shërbimet', 'Portofoli', 'Rreth Nesh', 'Kontakti'].map((item, index) => {
+              const sectionIds = ['home', 'services', 'portfolio', 'about', 'contact'];
+              return (
               <button
-                key={item}
-                onClick={() => scrollToSection(item.toLowerCase())}
+                key={item}
+                onClick={() => scrollToSection(sectionIds[index])}
                 className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
               >
                 {item}
               </button>
-            ))}
+              );
+            })}
             <button
               onClick={() => scrollToSection('contact')}
               className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
             >
-              Get Quote
+              Merr Ofertë
             </button>
           </nav>
@@ .. @@
           <nav className="md:hidden mt-4 pb-4 border-t border-gray-800">
             <div className="flex flex-col gap-4 pt-4">
-              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
+              {['Kryefaqja', 'Shërbimet', 'Portofoli', 'Rreth Nesh', 'Kontakti'].map((item, index) => {
+                const sectionIds = ['home', 'services', 'portfolio', 'about', 'contact'];
+                return (
                 <button
-                  key={item}
-                  onClick={() => scrollToSection(item.toLowerCase())}
+                  key={item}
+                  onClick={() => scrollToSection(sectionIds[index])}
                   className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-left"
                 >
                   {item}
                 </button>
-              ))}
+                );
+              })}
               <button
                 onClick={() => scrollToSection('contact')}
                 className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg mt-2 w-fit"
               >
-                Get Quote
+                Merr Ofertë
               </button>
             </div>
           </nav>