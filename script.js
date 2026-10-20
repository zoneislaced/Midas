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
                    image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/05c8bf1d-ed63-4e90-bec3-b7c2ecbb1987_rw_1920.jpg",
                    span: "md:col-span-2 md:row-span-2"
                },
                {
                    title: "Luxe & Craft",
                    category: "Products",
                    year: "2025",
                    description: "High-end commercial product styling designed to elevate brand narratives.",
                    image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/186c30f5-b706-42e6-963f-a55806921018_rw_1920.jpeg",
                    span: ""
                },
                {
                    title: "The Grand Celebration",
                    category: "Events",
                    year: "2025",
                    description: "Timeless documentary coverage preserving the energy and intimacy of milestone gatherings.",
                    image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/2ecadd8c-1ed3-428d-89cc-c86ce86ce5bc_rw_600.png",
                    span: ""
                }
            ];

            const galleryFilters = ["All", "Food & Beverages", "Real Estate", "Portraits", "Products", "Events"];

            const galleryItems = [
                // Food & Beverages
                { title: "Culinary Art", category: "Food & Beverages", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Food%20%26%20Beverages/296ebc17-03df-4478-984e-1f42770014b7_rw_1200.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Food%20%26%20Beverages/296ebc17-03df-4478-984e-1f42770014b7_rw_1200.jpg" },
                { title: "Artisan Brew", category: "Food & Beverages", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Food%20%26%20Beverages/57e94b7e-9531-42d4-8919-428fc4ff77b4_rw_1200.png", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Food%20%26%20Beverages/57e94b7e-9531-42d4-8919-428fc4ff77b4_rw_1200.png" },
                { title: "Gastronomy Dish", category: "Food & Beverages", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Food%20%26%20Beverages/8bfcbef0-b1a4-4e51-8ca9-a84a5ead5df2_rw_1200.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Food%20%26%20Beverages/8bfcbef0-b1a4-4e51-8ca9-a84a5ead5df2_rw_1200.jpg" },
                { title: "Gourmet Selection", category: "Food & Beverages", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Food%20%26%20Beverages/954e82ad-952c-4eda-9803-4aed604e9a62_rw_1200.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Food%20%26%20Beverages/954e82ad-952c-4eda-9803-4aed604e9a62_rw_1200.jpg" },
                { title: "Signature Dish", category: "Food & Beverages", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Food%20%26%20Beverages/c2bbe1aa-2fd2-4086-b5d3-0e9b9e8f471a_rw_1200.png", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Food%20%26%20Beverages/c2bbe1aa-2fd2-4086-b5d3-0e9b9e8f471a_rw_1200.png" },
                { title: "Plated Perfection", category: "Food & Beverages", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Food%20%26%20Beverages/c5071c4e-2473-4734-8079-4e6f14c6ef64_rw_1200.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Food%20%26%20Beverages/c5071c4e-2473-4734-8079-4e6f14c6ef64_rw_1200.jpg" },
                { title: "Fine Dining", category: "Food & Beverages", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Food%20%26%20Beverages/db51166b-a973-4209-842b-358e06cd63d6_rw_1200.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Food%20%26%20Beverages/db51166b-a973-4209-842b-358e06cd63d6_rw_1200.jpg" },
                { title: "Culinary Presentation", category: "Food & Beverages", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Food%20%26%20Beverages/e1abbf0c-7d15-4775-8cc3-65bdb04a7b5e_rw_1200.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Food%20%26%20Beverages/e1abbf0c-7d15-4775-8cc3-65bdb04a7b5e_rw_1200.jpg" },

                // Real Estate (Updated with new user uploads)
                { title: "Modern Villa Interior", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/05c8bf1d-ed63-4e90-bec3-b7c2ecbb1987_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/05c8bf1d-ed63-4e90-bec3-b7c2ecbb1987_rw_1920.jpg" },
                { title: "Architectural Space I", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/148adfcc-ced7-4afc-a754-453b3e0c073f_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/148adfcc-ced7-4afc-a754-453b3e0c073f_rw_600.jpg" },
                { title: "Architectural Space II", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/19b4c0ba-a6a0-4681-9b79-ab66fffcd6c1_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/19b4c0ba-a6a0-4681-9b79-ab66fffcd6c1_rw_600.jpg" },
                { title: "Architectural Space III", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/1a971b3c-1c4d-4990-96a1-473124934a8c_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/1a971b3c-1c4d-4990-96a1-473124934a8c_rw_1920.jpg" },
                { title: "Architectural Space IV", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/1d389a38-4276-4f60-beab-6f3740716c62_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/1d389a38-4276-4f60-beab-6f3740716c62_rw_1920.jpg" },
                { title: "Architectural Space V", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/1e018bed-6454-4dbe-92fb-7baf3f2f3fac_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/1e018bed-6454-4dbe-92fb-7baf3f2f3fac_rw_600.jpg" },
                { title: "Architectural Space VI", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/245ce99d-121f-4232-9f5d-481e9f9b2633_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/245ce99d-121f-4232-9f5d-481e9f9b2633_rw_600.jpg" },
                { title: "Architectural Space VII", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/32a34aac-3251-4ab8-b84d-32315a97edff_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/32a34aac-3251-4ab8-b84d-32315a97edff_rw_1920.jpg" },
                { title: "Architectural Space VIII", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/3c7d2343-a9d0-45ca-b24e-05c580690c2d_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/3c7d2343-a9d0-45ca-b24e-05c580690c2d_rw_600.jpg" },
                { title: "Architectural Space IX", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/532273d5-1d39-4ed5-8f7d-d9b390468c41_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/532273d5-1d39-4ed5-8f7d-d9b390468c41_rw_1920.jpg" },
                { title: "Architectural Space X", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/578ca1ad-8a14-4ae9-a4c3-173a47abd7f1_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/578ca1ad-8a14-4ae9-a4c3-173a47abd7f1_rw_600.jpg" },
                { title: "Penthouse Horizon", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/592623d0-da69-4b6f-96ef-5fb70158a6e7_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/592623d0-da69-4b6f-96ef-5fb70158a6e7_rw_600.jpg" },
                { title: "Architectural Space XI", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/5afd0ad9-4adf-455d-8114-02db9da19105_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/5afd0ad9-4adf-455d-8114-02db9da19105_rw_1920.jpg" },
                { title: "Architectural Space XII", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/5baf4853-3a9c-4438-b9df-439c1b968e2b_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/5baf4853-3a9c-4438-b9df-439c1b968e2b_rw_1920.jpg" },
                { title: "Architectural Space XIII", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/5bd65f24-44d9-4277-afcf-2c67ce046ad8_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/5bd65f24-44d9-4277-afcf-2c67ce046ad8_rw_600.jpg" },
                { title: "Architectural Space XIV", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/5f02f56e-bb5f-4e56-b3d4-90ffc9868f02_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/5f02f56e-bb5f-4e56-b3d4-90ffc9868f02_rw_600.jpg" },
                { title: "Architectural Space XV", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/79c685e1-c201-4899-a952-26d76bce380d_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/79c685e1-c201-4899-a952-26d76bce380d_rw_600.jpg" },
                { title: "Architectural Living", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/8586578f-de5a-4764-b8f8-0c8c96d528a1_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/8586578f-de5a-4764-b8f8-0c8c96d528a1_rw_600.jpg" },
                { title: "Architectural Space XVI", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/87e86667-3e7a-4341-8de8-981973e213ba_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/87e86667-3e7a-4341-8de8-981973e213ba_rw_1920.jpg" },
                { title: "Executive Space", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/88fa3d29-af16-4029-a77f-fe30bef468a0_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/88fa3d29-af16-4029-a77f-fe30bef468a0_rw_600.jpg" },
                { title: "Architectural Space XVII", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/9a7938ed-b0c8-47af-838d-1dc2db8d5453_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/9a7938ed-b0c8-47af-838d-1dc2db8d5453_rw_600.jpg" },
                { title: "Architectural Space XVIII", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/b0ba94ee-1e4d-41f8-ae7a-87625ffb6605_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/b0ba94ee-1e4d-41f8-ae7a-87625ffb6605_rw_600.jpg" },
                { title: "Architectural Space XIX", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/bcf67e5b-5c5a-44e5-a903-24379fcbefc7_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/bcf67e5b-5c5a-44e5-a903-24379fcbefc7_rw_600.jpg" },
                { title: "Architectural Space XX", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/cacc6dfe-0e87-438e-9441-8be35ed059ec_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/cacc6dfe-0e87-438e-9441-8be35ed059ec_rw_1920.jpg" },
                { title: "Architectural Space XXI", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/cb975cdd-0070-41a9-a0db-dc70803f8115_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/cb975cdd-0070-41a9-a0db-dc70803f8115_rw_1920.jpg" },
                { title: "Architectural Space XXII", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/cf3598f5-c2f0-44b9-b055-facd7a309ce3_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/cf3598f5-c2f0-44b9-b055-facd7a309ce3_rw_1920.jpg" },
                { title: "Luxe Suite Elevation", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/d0ede82e-3fc8-4825-9d4a-03617d4926c4_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/d0ede82e-3fc8-4825-9d4a-03617d4926c4_rw_600.jpg" },
                { title: "Architectural Space XXIII", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/e9f5332a-da45-47ab-a7b4-4c238fea47fd_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/e9f5332a-da45-47ab-a7b4-4c238fea47fd_rw_1920.jpg" },
                { title: "Architectural Space XXIV", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/eb975e3c-146f-4150-84c4-00eb0dd1eb17_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/eb975e3c-146f-4150-84c4-00eb0dd1eb17_rw_600.jpg" },
                { title: "Architectural Space XXV", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/ec575ea5-1d6a-4c2d-a0b1-fe22f52bb1eb_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/ec575ea5-1d6a-4c2d-a0b1-fe22f52bb1eb_rw_1920.jpg" },
                { title: "Architectural Space XXVI", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/f82476b2-dee9-43e1-b15d-8861a15d7060_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/f82476b2-dee9-43e1-b15d-8861a15d7060_rw_600.jpg" },
                { title: "Architectural Space XXVII", category: "Real Estate", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/f9124e9e-78f5-42a5-8bad-b978b684aa3f_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Real%20Estate/f9124e9e-78f5-42a5-8bad-b978b684aa3f_rw_1920.jpg" },

                // Portraits
                { title: "Studio Muse", category: "Portraits", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/07e5bc37-7ae1-4ca4-a02c-7407541a6f7b_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/07e5bc37-7ae1-4ca4-a02c-7407541a6f7b_rw_600.jpg" },
                { title: "Candid Frame", category: "Portraits", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/3da5357b-8276-43f3-b824-f609305dcecf_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/3da5357b-8276-43f3-b824-f609305dcecf_rw_600.jpg" },
                { title: "Expressive Portrait", category: "Portraits", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/45955a6c-66b1-4797-af1c-1dc740d769b5_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/45955a6c-66b1-4797-af1c-1dc740d769b5_rw_1920.jpg" },
                { title: "Natural Light Portrait", category: "Portraits", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/6f2ecdc6-da48-411c-8c85-84e97ab37a1c_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/6f2ecdc6-da48-411c-8c85-84e97ab37a1c_rw_600.jpg" },
                { title: "Character Study", category: "Portraits", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/80727df7-b4d3-40d7-9616-a872a9a168ad_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/80727df7-b4d3-40d7-9616-a872a9a168ad_rw_1920.jpg" },
                { title: "Editorial Portrait", category: "Portraits", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/93a3d889-a88a-44d1-be6e-c57545bfe3fe_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/93a3d889-a88a-44d1-be6e-c57545bfe3fe_rw_1920.jpg" },
                { title: "Fine Art Portrait", category: "Portraits", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/974cfcc0-a4ed-41a4-ac3f-4d38554fb352_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/974cfcc0-a4ed-41a4-ac3f-4d38554fb352_rw_1920.jpg" },
                { title: "Timeless Face", category: "Portraits", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/9815591d-1dad-486f-9ed7-f81426c96e77_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/9815591d-1dad-486f-9ed7-f81426c96e77_rw_1920.jpg" },
                { title: "Cinematic Portrait", category: "Portraits", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/9d255982-9555-4a2f-8990-8514773208d8_rw_1200.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/9d255982-9555-4a2f-8990-8514773208d8_rw_1200.jpg" },
                { title: "Monochrome Study", category: "Portraits", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/a04b489d-a796-413c-9693-e2edcb65ae9d_rw_1200.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Portraits/a04b489d-a796-413c-9693-e2edcb65ae9d_rw_1200.jpg" },

                // Products (Updated with all provided raw URLs)
                { title: "Commercial Asset I", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/186c30f5-b706-42e6-963f-a55806921018_rw_1920.jpeg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/186c30f5-b706-42e6-963f-a55806921018_rw_1920.jpeg" },
                { title: "Commercial Asset II", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/195ca922-b278-4c4a-b3aa-0dc9bef04296_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/195ca922-b278-4c4a-b3aa-0dc9bef04296_rw_600.jpg" },
                { title: "Commercial Asset III", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/1a897465-e1a3-484f-b18c-163823cbc571_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/1a897465-e1a3-484f-b18c-163823cbc571_rw_1920.jpg" },
                { title: "Commercial Asset IV", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/1da231b3-f9e2-428e-87b9-da1f82edd433_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/1da231b3-f9e2-428e-87b9-da1f82edd433_rw_600.jpg" },
                { title: "Commercial Asset V", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/32b28c44-2ffd-41f7-adde-26151cee0607_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/32b28c44-2ffd-41f7-adde-26151cee0607_rw_600.jpg" },
                { title: "Commercial Asset VI", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/3ec2ffb7-93f3-4cd1-a7fb-400ca8d5308b_rw_1920%20(1).jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/3ec2ffb7-93f3-4cd1-a7fb-400ca8d5308b_rw_1920%20(1).jpg" },
                { title: "Commercial Asset VII", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/3ec2ffb7-93f3-4cd1-a7fb-400ca8d5308b_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/3ec2ffb7-93f3-4cd1-a7fb-400ca8d5308b_rw_1920.jpg" },
                { title: "Commercial Asset VIII", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/487e791a-4c88-4dd3-b2aa-5803a4e06ce2_rw_1920.jpeg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/487e791a-4c88-4dd3-b2aa-5803a4e06ce2_rw_1920.jpeg" },
                { title: "Commercial Asset IX", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/4c93e74b-0cd8-4df4-a632-acff6cc25f81_rw_1920%20(1).jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/4c93e74b-0cd8-4df4-a632-acff6cc25f81_rw_1920%20(1).jpg" },
                { title: "Commercial Asset X", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/4c93e74b-0cd8-4df4-a632-acff6cc25f81_rw_1920.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/4c93e74b-0cd8-4df4-a632-acff6cc25f81_rw_1920.jpg" },
                { title: "Commercial Asset XI", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/4e93f751-a4d7-495e-a49e-22f1b8319cdf_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/4e93f751-a4d7-495e-a49e-22f1b8319cdf_rw_600.jpg" },
                { title: "Commercial Asset XII", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/5ba36d10-fd7f-4172-bcf9-617b3ceb9ce3_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/5ba36d10-fd7f-4172-bcf9-617b3ceb9ce3_rw_600.jpg" },
                { title: "Commercial Asset XIII", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/5e0d032b-0f78-4e8b-ab46-c6f2f4a22794_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/5e0d032b-0f78-4e8b-ab46-c6f2f4a22794_rw_600.jpg" },
                { title: "Commercial Asset XIV", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/64a4213a-d410-48ae-b04a-e7c6ecd4f4a7_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/64a4213a-d410-48ae-b04a-e7c6ecd4f4a7_rw_600.jpg" },
                { title: "Commercial Asset XV", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/64d5f63c-7168-43c1-a692-5948c0410738_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/64d5f63c-7168-43c1-a692-5948c0410738_rw_600.jpg" },
                { title: "Commercial Asset XVI", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/692a668d-a75b-4a50-b820-409155df73c6_rw_1920.jpeg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/692a668d-a75b-4a50-b820-409155df73c6_rw_1920.jpeg" },
                { title: "Commercial Asset XVII", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/6eb78d46-28f8-4403-9bd1-2f9b79f00454_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/6eb78d46-28f8-4403-9bd1-2f9b79f00454_rw_600.jpg" },
                { title: "Commercial Asset XVIII", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/903c0fe6-05b8-4355-9481-65db96c784e6_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/903c0fe6-05b8-4355-9481-65db96c784e6_rw_600.jpg" },
                { title: "Commercial Asset XIX", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/99db5876-05b1-4cd5-9bcb-0f98461f9a8a_rw_600.jpeg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/99db5876-05b1-4cd5-9bcb-0f98461f9a8a_rw_600.jpeg" },
                { title: "Commercial Asset XX", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/a19103a3-f89c-4258-9adc-e48dc77459b8_rw_1920.jpeg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/a19103a3-f89c-4258-9adc-e48dc77459b8_rw_1920.jpeg" },
                { title: "Commercial Asset XXI", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/a33e583d-76a1-4ee2-8193-6f5ae0f6bace_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/a33e583d-76a1-4ee2-8193-6f5ae0f6bace_rw_600.jpg" },
                { title: "Commercial Asset XXII", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/a3e1b3be-34a3-4819-9b33-843222cd5c43_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/a3e1b3be-34a3-4819-9b33-843222cd5c43_rw_600.jpg" },
                { title: "Commercial Asset XXIII", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/a43dedfb-a0ad-45bf-b1f0-c25eea4f642e_rw_1920.jpeg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/a43dedfb-a0ad-45bf-b1f0-c25eea4f642e_rw_1920.jpeg" },
                { title: "Commercial Asset XXIV", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/a5fad600-6f21-42cd-bbec-5d5737c6b553_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/a5fad600-6f21-42cd-bbec-5d5737c6b553_rw_600.jpg" },
                { title: "Commercial Asset XXV", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/a987e0b4-2e38-45ed-aea8-f2ec4b3a9dc2_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/a987e0b4-2e38-45ed-aea8-f2ec4b3a9dc2_rw_600.jpg" },
                { title: "Commercial Asset XXVI", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/aee44938-8d33-4a3f-ba58-44a9a832eb94_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/aee44938-8d33-4a3f-ba58-44a9a832eb94_rw_600.jpg" },
                { title: "Commercial Asset XXVII", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/b430f02e-ca2a-467c-8073-f27e3a686fad_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/b430f02e-ca2a-467c-8073-f27e3a686fad_rw_600.jpg" },
                { title: "Commercial Asset XXVIII", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/b6797cda-85e4-4481-8ea4-add9babb45d8_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/b6797cda-85e4-4481-8ea4-add9babb45d8_rw_600.jpg" },
                { title: "Commercial Asset XXIX", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/b7a8f489-7d9c-470e-b2d0-eb137ecddad1_rw_1920.jpeg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/b7a8f489-7d9c-470e-b2d0-eb137ecddad1_rw_1920.jpeg" },
                { title: "Commercial Asset XXX", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/be6d87da-e827-4126-a035-0cadfec114f3_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/be6d87da-e827-4126-a035-0cadfec114f3_rw_600.jpg" },
                { title: "Commercial Asset XXXI", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/c9777665-5068-48ad-a2bf-7871ff6e5854_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/c9777665-5068-48ad-a2bf-7871ff6e5854_rw_600.jpg" },
                { title: "Commercial Asset XXXII", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/dbd4ebde-a572-4ea9-bc16-eaceadf293cd_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/dbd4ebde-a572-4ea9-bc16-eaceadf293cd_rw_600.jpg" },
                { title: "Commercial Asset XXXIII", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/ee93fcad-b339-4573-97cb-83a6fd7ea1b4_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/ee93fcad-b339-4573-97cb-83a6fd7ea1b4_rw_600.jpg" },
                { title: "Commercial Asset XXXIV", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/f16aead3-8521-4518-a268-2ea152c02fe5_rw_600.jpeg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/f16aead3-8521-4518-a268-2ea152c02fe5_rw_600.jpeg" },
                { title: "Commercial Asset XXXV", category: "Products", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/fc20e75d-0b75-4e47-baa0-773fb19c908d_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Products/fc20e75d-0b75-4e47-baa0-773fb19c908d_rw_600.jpg" },

                // Events
                { title: "Golden Reception", category: "Events", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/2ecadd8c-1ed3-428d-89cc-c86ce86ce5bc_rw_600.png", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/2ecadd8c-1ed3-428d-89cc-c86ce86ce5bc_rw_600.png" },
                { title: "Gala Night", category: "Events", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/307165f5-e8cf-47f3-af7a-15ff42a6a2d6_rw_600.png", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/307165f5-e8cf-47f3-af7a-15ff42a6a2d6_rw_600.png" },
                { title: "Celebration Moment", category: "Events", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/327e6f10-2fa5-4473-8eb4-313d87c567ec_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/327e6f10-2fa5-4473-8eb4-313d87c567ec_rw_600.jpg" },
                { title: "Live Gathering", category: "Events", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/3c5df330-b9c0-4ed6-8e45-ce3e2295352b_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/3c5df330-b9c0-4ed6-8e45-ce3e2295352b_rw_600.jpg" },
                { title: "Milestone Evening", category: "Events", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/4c6f2f9b-0dc8-42a9-beda-f50b4f80237a_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/4c6f2f9b-0dc8-42a9-beda-f50b4f80237a_rw_600.jpg" },
                { title: "Stage & Spotlight", category: "Events", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/51cc1bc6-fcf6-4b1e-bd7c-fe1a0efd3a99_rw_600.png", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/51cc1bc6-fcf6-4b1e-bd7c-fe1a0efd3a99_rw_600.png" },
                { title: "Corporate Reception", category: "Events", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/7596d855-c6e5-45b5-aae6-139764271c49_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/7596d855-c6e5-45b5-aae6-139764271c49_rw_600.jpg" },
                { title: "Dynamic Social", category: "Events", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/796007ba-2fad-41b7-a598-543eb624dfb7_rw_600.jpg", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/796007ba-2fad-41b7-a598-543eb624dfb7_rw_600.jpg" },
                { title: "Evening Celebration", category: "Events", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/96852291-a93c-480b-85a0-fb2f2e2e3d81_rw_600.png", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/96852291-a93c-480b-85a0-fb2f2e2e3d81_rw_600.png" },
                { title: "Festive Atmosphere", category: "Events", image: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/c6ef43ca-a56a-453f-a37e-e4657f116dad_rw_600.png", full: "https://raw.githubusercontent.com/zoneislaced/Midas/refs/heads/main/Events/c6ef43ca-a56a-453f-a37e-e4657f116dad_rw_600.png" }
            ];

            const stats = [
                { value: 1, suffix: "+", label: "Years of Practice" },
                { value: 180, suffix: "+", label: "Projects Delivered" },
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
                { label: "Instagram", href: "https://www.instagram.com/midascreativegrp?exln=YzJkZjB3a3Ywd3Q2.", icon: "fab fa-instagram" },
                { label: "WhatsApp", href: "https://wa.me/254700000000", icon: "fab fa-whatsapp" },
                { label: "Gmail", href: "mailto:hello@midas.photography", icon: "far fa-envelope" }
            ];

            // ============ HERO ROTATING BACKGROUND SETUP ============
            function initHeroSlideshow(items) {
                let heroContainer = document.getElementById("hero") || document.querySelector("section");
                if (!heroContainer) return;

                heroContainer.style.position = "relative";
                heroContainer.style.overflow = "hidden";

                let heroImg = document.getElementById("hero-img");

                if (!heroImg) {
                    heroImg = document.createElement("div");
                    heroImg.id = "hero-img";
                    heroImg.style.position = "absolute";
                    heroImg.style.inset = "0";
                    heroImg.style.zIndex = "0";
                    heroImg.style.backgroundSize = "cover";
                    heroImg.style.backgroundPosition = "center";
                    heroImg.style.transition = "opacity 1.2s ease-in-out";
                    heroContainer.insertBefore(heroImg, heroContainer.firstChild);
                }

                const bgUrls = items.map(function(item) { return item.image; });
                let currentIndex = 0;

                function setBackground(url) {
                    if (heroImg.tagName === "IMG") {
                        heroImg.src = url;
                        heroImg.style.objectFit = "cover";
                        heroImg.style.width = "100%";
                        heroImg.style.height = "100%";
                    } else {
                        heroImg.style.backgroundImage = 'linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url("' + url + '")';
                    }
                }

                setBackground(bgUrls[0]);

                setInterval(function () {
                    currentIndex = (currentIndex + 1) % bgUrls.length;
                    heroImg.style.opacity = "0.2";
                    setTimeout(function () {
                        setBackground(bgUrls[currentIndex]);
                        heroImg.style.opacity = "1";
                    }, 600);
                }, 4500);
            }

            // ============ RENDER FUNCTIONS ============
            function renderNav(items) {
                return items.map(function (item) {
                    return '<li><a href="' + item.href + '" class="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-gold transition-colors duration-300">' + item.label + '</a></li>';
                }).join("");
            }

            function renderMobileNav(items) {
                return items.map(function (item, index) {
                    const num = String(index + 1).padStart(2, "0");
                    return '<li class="mobile-nav-item border-b border-white/10 pb-4 opacity-0 translate-y-4 transition-all duration-500 ease-out">' +
                        '<a href="' + item.href + '" class="flex items-center justify-between group py-1">' +
                            '<span class="font-display text-3xl tracking-wide text-white/90 group-hover:text-gold transition-colors duration-300">' + item.label + '</span>' +
                            '<span class="text-xs tracking-[0.25em] font-mono text-gold/70 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300">' + num + ' ✦</span>' +
                        '</a>' +
                    '</li>';
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
                        '<img src="' + item.image + '" alt="' + item.title + ' ' + item.category + ' photography" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />' +
                        '<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>' +
                        '<div class="absolute top-6 left-6 h-8 w-px bg-gold/60"></div>' +
                        '<div class="absolute bottom-0 left-0 right-0 p-7 md:p-8">' +
                            '<p class="text-[11px] tracking-[0.3em] uppercase text-gold mb-2">' + item.category + ' ' + item.year + '</p>' +
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
                        '<img src="' + item.image + '" alt="' + item.title + ' ' + item.category.toLowerCase() + ' photography" loading="lazy" class="w-full h-[420px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-110" />' +
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

            function setupMobileOverlay() {
                const mobileMenu = document.getElementById("mobile-menu");
                if (!mobileMenu) return;

                mobileMenu.className = "fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-8 md:hidden transition-all duration-500 pointer-events-none opacity-0";
                
                mobileMenu.innerHTML = 
                    '<div class="flex items-center justify-between border-b border-white/10 pb-6 mb-6">' +
                        '<div class="flex items-center gap-3">' +
                            '<span class="h-2 w-2 rounded-full bg-gold animate-pulse"></span>' +
                            '<span class="font-display tracking-[0.25em] uppercase text-sm text-white">MIDAS STUDIO</span>' +
                        '</div>' +
                        '<button id="mobile-close-btn" class="h-10 w-10 rounded-full border border-white/20 text-white/70 flex items-center justify-center hover:border-gold hover:text-gold transition-colors" aria-label="Close Navigation">' +
                            '<i class="fas fa-times text-sm"></i>' +
                        '</button>' +
                    '</div>' +
                    '<ul id="mobile-nav-list" class="flex flex-col gap-5 my-auto"></ul>' +
                    '<div class="pt-6 border-t border-white/10 flex flex-col gap-4">' +
                        '<p class="text-[10px] uppercase tracking-[0.3em] text-white/40">Connect & Inquire</p>' +
                        '<div id="mobile-social" class="flex gap-3"></div>' +
                    '</div>';
            }

            // ============ STATE & URL PARAMS ============
            var lightboxItems = [];
            var lightboxIndex = 0;
            var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            function getFilterFromUrl() {
                var params = new URLSearchParams(window.location.search);
                var filter = params.get("filter");
                return filter && galleryFilters.includes(filter) ? filter : "All";
            }

            function updateUrlFilter(cat) {
                var url = new URL(window.location);
                if (cat === "All") {
                    url.searchParams.delete("filter");
                } else {
                    url.searchParams.set("filter", cat);
                }
                window.history.replaceState({}, "", url);
            }

            // ============ MOUNT ============
            document.body.style.overflow = "hidden";
            setupMobileOverlay();
            
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

            initHeroSlideshow(galleryItems);

            var initialFilter = getFilterFromUrl();
            applyFilter(initialFilter, true);

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
                updateUrlFilter(cat);
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
                document.getElementById("lightbox-caption").textContent = item.title + " " + item.category;
                document.getElementById("lightbox-counter").textContent =
                    String(lightboxIndex + 1).padStart(2, "0") + " / " + String(lightboxItems.length).padStart(2, "0");
            }

            function stepLightbox(dir) {
                lightboxIndex = (lightboxIndex + dir + lightboxItems.length) % lightboxItems.length;
                updateLightbox();
            }

            // ============ ANIMATED MOBILE MENU ============
            function openMobileMenu() {
                const mobileMenu = document.getElementById("mobile-menu");
                if (!mobileMenu) return;

                mobileMenu.classList.add("open");
                document.body.style.overflow = "hidden";

                const navItems = mobileMenu.querySelectorAll(".mobile-nav-item");
                navItems.forEach(function (item, idx) {
                    setTimeout(function () {
                        item.classList.remove("opacity-0", "translate-y-4");
                        item.classList.add("opacity-100", "translate-y-0");
                    }, idx * 70 + 100);
                });
            }

            function closeMobileMenu() {
                const mobileMenu = document.getElementById("mobile-menu");
                if (!mobileMenu) return;

                const navItems = mobileMenu.querySelectorAll(".mobile-nav-item");
                navItems.forEach(function (item) {
                    item.classList.add("opacity-0", "translate-y-4");
                    item.classList.remove("opacity-100", "translate-y-0");
                });

                setTimeout(function () {
                    mobileMenu.classList.remove("open");
                    document.body.style.overflow = "";
                }, 200);
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
                if (header) header.classList.toggle("scrolled", y > 40);

                if (heroImg && y < window.innerHeight) {
                    heroImg.style.transform = "translateY(" + (y * 0.35) + "px)";
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
                var duration = 3500; // Slower counter speed to eliminate jumpy UI behavior
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
            if (statsGrid) statsObserver.observe(statsGrid);

            // ============ EVENT DELEGATION ============
            document.addEventListener("click", function (e) {
                var menuBtn = e.target.closest("#menu-btn");
                if (menuBtn) {
                    e.preventDefault();
                    openMobileMenu();
                    return;
                }

                if (e.target.closest("#mobile-close-btn")) {
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

                var link = e.target.closest('a[href^="#"]');
                if (link) {
                    var href = link.getAttribute("href");
                    closeMobileMenu();
                    if (href && href !== "#") {
                        try {
                            var target = document.querySelector(href);
                            if (target) {
                                e.preventDefault();
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