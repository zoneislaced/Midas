(function () {
            // ============ DATA LAYER ============
            const navItems = [
                { label: "Work", href: "#work" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" }
            ];

            const marqueeItems = ["Food & Beverages", "Real Estate", "Portraits", "Products", "Events"];

            const featuredWorks = [
                {
                    title: "Architectural Symphony",
                    category: "Real Estate",
                    year: "2025",
                    description: "Capturing the clean lines, light play, and sophisticated atmosphere of modern spaces.",
                    image: "https://picsum.photos/1400/1000?random=101",
                    span: "md:col-span-2 md:row-span-2"
                },
                {
                    title: "Luxe & Craft",
                    category: "Products",
                    year: "2025",
                    description: "High-end commercial product styling designed to elevate brand narratives.",
                    image: "https://picsum.photos/800/600?random=102",
                    span: ""
                },
                {
                    title: "The Grand Celebration",
                    category: "Events",
                    year: "2025",
                    description: "Timeless documentary coverage preserving the energy and intimacy of milestone gatherings.",
                    image: "https://picsum.photos/800/600?random=103",
                    span: ""
                }
            ];

            const galleryFilters = ["All", "Food & Beverages", "Real Estate", "Portraits", "Products", "Events"];

            const galleryItems = [
                { title: "Culinary Art", category: "Food & Beverages", image: "https://picsum.photos/900/1200?random=201", full: "https://picsum.photos/1600/2000?random=201" },
                { title: "Modern Interior", category: "Real Estate", image: "https://picsum.photos/900/1200?random=202", full: "https://picsum.photos/1600/2000?random=202" },
                { title: "Studio Muse", category: "Portraits", image: "https://picsum.photos/900/1200?random=203", full: "https://picsum.photos/1600/2000?random=203" },
                { title: "Luxe Bottle", category: "Products", image: "https://picsum.photos/900/1200?random=204", full: "https://picsum.photos/1600/2000?random=204" },
                { title: "Golden Reception", category: "Events", image: "https://i.imgur.com/FV2tAvK.png", full: "https://i.imgur.com/FV2tAvK.png" },
                { title: "Artisan Brew", category: "Food & Beverages", image: "https://picsum.photos/900/1200?random=206", full: "https://picsum.photos/1600/2000?random=206" },
                { title: "Penthouse View", category: "Real Estate", image: "https://picsum.photos/900/1200?random=207", full: "https://picsum.photos/1600/2000?random=207" },
                { title: "Candid Frame", category: "Portraits", image: "https://picsum.photos/900/1200?random=208", full: "https://picsum.photos/1600/2000?random=208" },
                { title: "Minimalist Flacon", category: "Products", image: "https://picsum.photos/900/1200?random=209", full: "https://picsum.photos/1600/2000?random=209" },
                { title: "Gala Night", category: "Events", image: "https://i.imgur.com/FV2tAvK.png", full: "https://i.imgur.com/FV2tAvK.png" },
                { title: "Gastronomy Dish", category: "Food & Beverages", image: "https://picsum.photos/900/1200?random=211", full: "https://picsum.photos/1600/2000?random=211" },
                { title: "Executive Suite", category: "Real Estate", image: "https://picsum.photos/900/1200?random=212", full: "https://picsum.photos/1600/2000?random=212" },
                { title: "Celebration Moment", category: "Events", image: "https://i.imgur.com/XaoJNb6.png", full: "https://i.imgur.com/XaoJNb6.png" },
                { title: "Live Gathering", category: "Events", image: "https://i.imgur.com/5h8OSBF.png", full: "https://i.imgur.com/5h8OSBF.png" },
                { title: "Milestone Evening", category: "Events", image: "https://i.imgur.com/VvaUrGf.png", full: "https://i.imgur.com/VvaUrGf.png" },
                { title: "Stage & Spotlight", category: "Events", image: "https://i.imgur.com/VMIeMfo.png", full: "https://i.imgur.com/VMIeMfo.png" },
                { title: "Corporate Reception", category: "Events", image: "https://i.imgur.com/6ZvmqiI.png", full: "https://i.imgur.com/6ZvmqiI.png" },
                { title: "Dynamic Social", category: "Events", image: "https://i.imgur.com/QbD2UaF.png", full: "https://i.imgur.com/QbD2UaF.png" },
                { title: "Evening Celebration", category: "Events", image: "https://i.imgur.com/mpQH3VK.png", full: "https://i.imgur.com/mpQH3VK.png" },
                { title: "Festive Atmosphere", category: "Events", image: "https://i.imgur.com/zoE3Hsc.png", full: "https://i.imgur.com/zoE3Hsc.png" }
            ];

            const stats = [
                { value: 1, suffix: "+", label: "Years of Practice" },
                { value: 180, suffix: "+", label: "Projects Delivered" },
                { value: 10, suffix: "", label: "International Awards" },
                { value: 98, suffix: "%", label: "Client Satisfaction" }
            ];

            const services = [
                { icon: "fas fa-utensils", title: "Food and Beverages", description: "Stylized culinary photography, menu items, and beverage curation captured with vivid appetite appeal." },
                { icon: "fas fa-building", title: "Real Estate & Spaces", description: "Architectural interiors and spatial photography showcasing ambiance, lighting, and layout precision." },
                { icon: "fas fa-user-friends", title: "Portraits", description: "Editorial, personal branding, and individual portraits crafted around your unique story." },
                { icon: "fas fa-box-open", title: "Products", description: "High-end commercial product photography designed for e-commerce, advertising, and lookbooks." },
                { icon: "fas fa-glass-cheers", title: "Events", description: "Documentary-style coverage of corporate gatherings, private parties, galas, and milestones." }
            ];

            const testimonials = [
                { quote: "Midas transformed our campaign into visual poetry. Every frame felt intentional, luminous, and unmistakably ours.", name: "Ava Laurent", role: "Creative Director, Maison Laurent", avatar: "https://picsum.photos/100/100?random=301" },
                { quote: "The most intuitive photographer we've worked with. The final gallery was beyond anything we imagined.", name: "Daniel Okafor", role: "Founder, Vertex Studio", avatar: "https://picsum.photos/100/100?random=302" },
                { quote: "A master of light. Midas made our wedding day feel effortless while capturing every golden detail.", name: "Sofía Marchetti", role: "Bride, Positano 2025", avatar: "https://picsum.photos/100/100?random=303" }
            ];

            const footerLinks = [
                { label: "Work", href: "#work" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" }
            ];

            const socialLinks = [
                { label: "Instagram", href: "#", icon: "fab fa-instagram" },
                { label: "Behance", href: "#", icon: "fab fa-behance" },
                { label: "Pinterest", href: "#", icon: "fab fa-pinterest" },
                { label: "Vimeo", href: "#", icon: "fab fa-vimeo-v" }
            ];

            // ============ RENDER FUNCTIONS ============
            function renderNav(items) {
                return items.map(function (item) {
                    return '<li><a href="' + item.href + '" class="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-gold transition-colors duration-300">' + item.label + '</a></li>';
                }).join("");
            }

            function renderMobileNav(items) {
                return items.map(function (item) {
                    return '<li><a href="' + item.href + '" class="font-display text-4xl text-white/80 hover:text-gold transition-colors duration-300">' + item.label + '</a></li>';
                }).join("");
            }

            function renderMarquee(items) {
                var inner = items.map(function (item) {
                    return '<span class="mx-8 text-xs md:text-sm tracking-[0.35em] uppercase text-white/35">' + item + ' <span class="text-gold ml-8">✦</span></span>';
                }).join("");
                return inner + inner;
            }

            function renderFeatured(items) {
                return items.map(function (item) {
                    return '<article class="group relative overflow-hidden rounded-xl h-[420px] md:h-full ' + item.span + '">' +
                        '<img src="' + item.image + '" alt="' + item.title + ' — ' + item.category + ' photography" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />' +
                        '<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>' +
                        '<div class="absolute top-6 left-6 h-8 w-px bg-gold/60"></div>' +
                        '<div class="absolute bottom-0 left-0 right-0 p-7 md:p-8">' +
                            '<p class="text-[11px] tracking-[0.3em] uppercase text-gold mb-2">' + item.category + ' · ' + item.year + '</p>' +
                            '<h3 class="font-display text-2xl md:text-3xl text-white mb-2">' + item.title + '</h3>' +
                            '<p class="text-white/50 text-sm leading-relaxed max-w-md opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">' + item.description + '</p>' +
                        '</div>' +
                    '</article>';
                }).join("");
            }

            function renderFilters(items) {
                return items.map(function (item) {
                    var active = item === "All";
                    return '<button data-filter="' + item + '" role="button" aria-pressed="' + active + '" class="filter-btn text-xs tracking-[0.25em] uppercase px-5 py-3 rounded-full border transition-all duration-300 ' +
                        (active ? "border-gold text-gold bg-gold/10" : "border-white/15 text-white/50 hover:border-white/40 hover:text-white") + '">' + item + '</button>';
                }).join("");
            }

            function renderGallery(items) {
                return items.map(function (item, i) {
                    return '<article data-gallery-item data-category="' + item.category + '" data-index="' + i + '" class="gallery-item group relative overflow-hidden rounded-lg cursor-pointer" tabindex="0" role="button" aria-label="Open ' + item.title + ' in lightbox">' +
                        '<img src="' + item.image + '" alt="' + item.title + ' — ' + item.category.toLowerCase() + ' photography" loading="lazy" class="w-full h-[420px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-110" />' +
                        '<div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>' +
                        '<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">' +
                            '<span class="h-12 w-12 rounded-full border border-gold text-gold flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500"><i class="fas fa-expand-alt text-sm"></i></span>' +
                        '</div>' +
                        '<div class="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">' +
                            '<p class="text-[10px] tracking-[0.3em] uppercase text-gold mb-1">' + item.category + '</p>' +
                            '<h3 class="text-lg font-light text-white">' + item.title + '</h3>' +
                        '</div>' +
                    '</article>';
                }).join("");
            }

            function renderStats(items) {
                return items.map(function (item) {
                    return '<div class="text-center md:text-left">' +
                        '<p class="stat-value font-display text-4xl md:text-5xl text-gold" data-target="' + item.value + '" data-suffix="' + item.suffix + '">0' + item.suffix + '</p>' +
                        '<p class="text-white/50 text-sm mt-2 tracking-wide">' + item.label + '</p>' +
                    '</div>';
                }).join("");
            }

            function renderServices(items) {
                return items.map(function (item) {
                    return '<article class="group bg-smoke border border-white/5 rounded-xl p-8 hover:border-gold/40 hover:-translate-y-1 transition-all duration-500">' +
                        '<div class="h-12 w-12 rounded-full border border-gold/30 text-gold flex items-center justify-center text-lg mb-6 group-hover:bg-gold/10 group-hover:border-gold/60 transition-colors"><i class="' + item.icon + '"></i></div>' +
                        '<h3 class="font-display text-xl text-white mb-3">' + item.title + '</h3>' +
                        '<p class="text-sm text-white/45 leading-relaxed">' + item.description + '</p>' +
                    '</article>';
                }).join("");
            }

            function renderTestimonials(items) {
                return items.map(function (item) {
                    return '<article class="bg-smoke border border-white/5 rounded-xl p-8 flex flex-col">' +
                        '<div class="text-gold text-2xl mb-5"><i class="fas fa-quote-left"></i></div>' +
                        '<p class="text-white/60 italic leading-relaxed flex-1 mb-8">' + item.quote + '</p>' +
                        '<div class="flex items-center gap-4">' +
                            '<img src="' + item.avatar + '" alt="Portrait of ' + item.name + '" loading="lazy" class="h-11 w-11 rounded-full object-cover" />' +
                            '<div><p class="text-sm text-white font-medium">' + item.name + '</p><p class="text-xs text-white/40">' + item.role + '</p></div>' +
                        '</div>' +
                    '</article>';
                }).join("");
            }

            function renderSocial(items) {
                return items.map(function (item) {
                    return '<a href="' + item.href + '" aria-label="' + item.label + '" class="h-10 w-10 rounded-full border border-white/15 text-white/50 flex items-center justify-center hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all duration-300"><i class="' + item.icon + '"></i></a>';
                }).join("");
            }

            function renderFooterLinks(items) {
                return items.map(function (item) {
                    return '<li><a href="' + item.href + '" class="text-xs tracking-[0.2em] uppercase text-white/40 hover:text-gold transition-colors">' + item.label + '</a></li>';
                }).join("");
            }

            // ============ STATE ============
            var activeFilter = "All";
            var lightboxItems = [];
            var lightboxIndex = 0;
            var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            // ============ MOUNT ============
            document.body.style.overflow = "hidden";
            document.getElementById("nav-list").innerHTML = renderNav(navItems);
            document.getElementById("mobile-nav-list").innerHTML = renderMobileNav(navItems);
            document.getElementById("mobile-social").innerHTML = renderSocial(socialLinks);
            document.getElementById("marquee-track").innerHTML = renderMarquee(marqueeItems);
            document.getElementById("featured-grid").innerHTML = renderFeatured(featuredWorks);
            document.getElementById("filter-bar").innerHTML = renderFilters(galleryFilters);
            document.getElementById("gallery-grid").innerHTML = renderGallery(galleryItems);
            document.getElementById("stats-grid").innerHTML = renderStats(stats);
            document.getElementById("services-grid").innerHTML = renderServices(services);
            document.getElementById("testimonials-grid").innerHTML = renderTestimonials(testimonials);
            document.getElementById("social-links").innerHTML = renderSocial(socialLinks);
            document.getElementById("footer-social").innerHTML = renderSocial(socialLinks);
            document.getElementById("footer-links").innerHTML = renderFooterLinks(footerLinks);
            document.getElementById("year").textContent = new Date().getFullYear();

            applyFilter("All", true);

            // ============ PRELOADER ============
            function hidePreloader() {
                var pre = document.getElementById("preloader");
                if (pre && !pre.classList.contains("done")) {
                    pre.classList.add("done");
                    document.body.style.overflow = "";
                }
            }
            window.addEventListener("load", function () { setTimeout(hidePreloader, 900); });
            setTimeout(hidePreloader, 5000);

            // ============ FILTER / GALLERY ============
            function applyFilter(cat, initial) {
                activeFilter = cat;
                document.querySelectorAll(".filter-btn").forEach(function (btn) {
                    var isActive = btn.dataset.filter === cat;
                    btn.setAttribute("aria-pressed", String(isActive));
                    btn.classList.toggle("border-gold", isActive);
                    btn.classList.toggle("text-gold", isActive);
                    btn.classList.toggle("bg-gold/10", isActive);
                    btn.classList.toggle("border-white/15", !isActive);
                    btn.classList.toggle("text-white/50", !isActive);
                    btn.classList.toggle("hover:border-white/40", !isActive);
                    btn.classList.toggle("hover:text-white", !isActive);
                });

                var idx = 0;
                document.querySelectorAll("[data-gallery-item]").forEach(function (el) {
                    var show = cat === "All" || el.dataset.category === cat;
                    if (show) {
                        el.classList.remove("gallery-hidden");
                        el.classList.remove("gallery-show");
                        void el.offsetWidth;
                        el.style.transitionDelay = initial ? "0ms" : Math.min(idx * 60, 420) + "ms";
                        el.classList.add("gallery-show");
                        idx++;
                    } else {
                        el.classList.remove("gallery-show");
                        el.classList.add("gallery-hidden");
                    }
                });
            }

            function getVisibleItemData() {
                var indexes = Array.prototype.map.call(
                    document.querySelectorAll("[data-gallery-item]:not(.gallery-hidden)"),
                    function (el) { return parseInt(el.dataset.index, 10); }
                );
                return indexes.map(function (i) { return galleryItems[i]; });
            }

            // ============ LIGHTBOX ============
            function openLightbox(idx, items) {
                lightboxItems = items.slice();
                lightboxIndex = idx;
                updateLightbox();
                document.getElementById("lightbox").classList.add("open");
                document.body.style.overflow = "hidden";
            }

            function closeLightbox() {
                document.getElementById("lightbox").classList.remove("open");
                document.body.style.overflow = "";
            }

            function updateLightbox() {
                var item = lightboxItems[lightboxIndex];
                document.getElementById("lightbox-img").src = item.full || item.image;
                document.getElementById("lightbox-img").alt = item.title;
                document.getElementById("lightbox-caption").textContent = item.title + " — " + item.category;
                document.getElementById("lightbox-counter").textContent =
                    String(lightboxIndex + 1).padStart(2, "0") + " / " + String(lightboxItems.length).padStart(2, "0");
            }

            function stepLightbox(dir) {
                lightboxIndex = (lightboxIndex + dir + lightboxItems.length) % lightboxItems.length;
                updateLightbox();
            }

            // ============ MOBILE MENU ============
            function openMobileMenu() {
                document.getElementById("mobile-menu").classList.add("open");
                document.getElementById("mobile-menu").setAttribute("aria-hidden", "false");
                document.body.style.overflow = "hidden";
                document.getElementById("menu-btn").setAttribute("aria-expanded", "true");
                document.getElementById("menu-btn").innerHTML = '<i class="fas fa-times"></i>';
            }

            function closeMobileMenu() {
                document.getElementById("mobile-menu").classList.remove("open");
                document.getElementById("mobile-menu").setAttribute("aria-hidden", "true");
                document.body.style.overflow = "";
                document.getElementById("menu-btn").setAttribute("aria-expanded", "false");
                document.getElementById("menu-btn").innerHTML = '<i class="fas fa-bars"></i>';
            }

            // ============ FORM ============
            function handleSubmit() {
                var form = document.getElementById("contact-form");
                var status = document.getElementById("form-status");
                var formData = new FormData(form);
                
                status.classList.remove("hidden");
                status.textContent = "Sending message...";
                
                fetch("YOUR_BACKEND_OR_FORMSPREE_ENDPOINT", {
                    method: "POST",
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                }).then(response => {
                    if (response.ok) {
                        status.textContent = "Thank you! Your message has been received.";
                        status.classList.add("border-gold/30", "text-gold", "bg-gold/5");
                        status.classList.remove("border-red-400/30", "text-red-400", "bg-red-400/5");
                        form.reset();
                    } else {
                        throw new Error("Network response was not ok.");
                    }
                }).catch(error => {
                    status.textContent = "Oops! There was a problem submitting your form.";
                    status.classList.add("border-red-400/30", "text-red-400", "bg-red-400/5");
                    status.classList.remove("border-gold/30", "text-gold", "bg-gold/5");
                });
            }

            document.getElementById("contact-form").addEventListener("submit", function (e) {
                e.preventDefault();
                handleSubmit();
            });

            // ============ SCROLL ============
            var heroImg = document.getElementById("hero-img");
            var heroContent = document.getElementById("hero-content");
            var header = document.getElementById("header");

            function handleScroll() {
                var y = window.scrollY || window.pageYOffset;
                header.classList.toggle("scrolled", y > 40);

                if (heroImg && y < window.innerHeight) {
                    heroImg.style.transform = "translateY(" + (y * 0.35) + "px) scale(1.1)";
                }
                if (heroContent) {
                    heroContent.style.opacity = Math.max(1 - y / window.innerHeight, 0);
                }
            }

            window.addEventListener("scroll", function () {
                window.requestAnimationFrame(handleScroll);
            });

            // ============ OBSERVERS ============
            var revealObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed");
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

            document.querySelectorAll(".reveal").forEach(function (el) {
                revealObserver.observe(el);
            });

            function animateCounter(el, target, suffix) {
                var duration = 1800;
                var start = null;
                function tick(now) {
                    if (!start) start = now;
                    var progress = Math.min((now - start) / duration, 1);
                    var eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.round(target * eased) + suffix;
                    if (progress < 1) window.requestAnimationFrame(tick);
                }
                window.requestAnimationFrame(tick);
            }

            var statsGrid = document.getElementById("stats-grid");
            var statsObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        document.querySelectorAll(".stat-value").forEach(function (el) {
                            animateCounter(el, parseInt(el.dataset.target, 10), el.dataset.suffix);
                        });
                        statsObserver.disconnect();
                    }
                });
            }, { threshold: 0.3 });
            statsObserver.observe(statsGrid);

            // ============ EVENT DELEGATION ============
            document.addEventListener("click", function (e) {
                if (e.target.id === "mobile-menu") {
                    closeMobileMenu();
                    return;
                }

                if (e.target.closest("#submit-btn")) {
                    return;
                }

                var lbControl = e.target.closest("[data-lightbox-control]");
                if (lbControl) {
                    var action = lbControl.dataset.lightboxControl;
                    if (action === "close") closeLightbox();
                    else if (action === "prev") stepLightbox(-1);
                    else if (action === "next") stepLightbox(1);
                    return;
                }

                if (e.target.id === "lightbox") {
                    closeLightbox();
                    return;
                }

                var filterBtn = e.target.closest("[data-filter]");
                if (filterBtn) {
                    applyFilter(filterBtn.dataset.filter);
                    return;
                }

                var galleryItem = e.target.closest("[data-gallery-item]");
                if (galleryItem) {
                    var dataIndex = parseInt(galleryItem.dataset.index, 10);
                    var visible = getVisibleItemData();
                    var pos = -1;
                    galleryItems.forEach(function (item, i) {
                        if (i === dataIndex) pos = visible.indexOf(item);
                    });
                    if (pos !== -1) openLightbox(pos, visible);
                    return;
                }

                var menuBtn = e.target.closest("#menu-btn");
                if (menuBtn) {
                    var isOpen = document.getElementById("mobile-menu").classList.contains("open");
                    if (isOpen) closeMobileMenu();
                    else openMobileMenu();
                    return;
                }

                var link = e.target.closest('a[href^="#"]');
                if (link) {
                    e.preventDefault();
                    var href = link.getAttribute("href");
                    closeMobileMenu();
                    if (href && href !== "#") {
                        try {
                            var target = document.querySelector(href);
                            if (target) {
                                target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
                            }
                        } catch (err) { /* ignore */ }
                    }
                }
            });

            // ============ KEYBOARD ============
            document.addEventListener("keydown", function (e) {
                var lightboxOpen = document.getElementById("lightbox").classList.contains("open");
                if (lightboxOpen) {
                    if (e.key === "Escape") closeLightbox();
                    else if (e.key === "ArrowLeft") stepLightbox(-1);
                    else if (e.key === "ArrowRight") stepLightbox(1);
                } else if (e.key === "Escape") {
                    closeMobileMenu();
                }

                var galleryItem = e.target.closest && e.target.closest("[data-gallery-item]");
                if (galleryItem && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    var dataIndex = parseInt(galleryItem.dataset.index, 10);
                    var visible = getVisibleItemData();
                    var pos = -1;
                    galleryItems.forEach(function (item, i) {
                        if (i === dataIndex) pos = visible.indexOf(item);
                    });
                    if (pos !== -1) openLightbox(pos, visible);
                }
            });

            // ============ RESIZE ============
            window.addEventListener("resize", function () {
                if (window.innerWidth >= 768) closeMobileMenu();
            });

            handleScroll();
        })();