/* ==========================================================================
   TRANSLATION DICTIONARY
   ========================================================================== */
const i18n = {
    en: {
        nav_about: "About", nav_skills: "Skills", nav_edu: "Education", nav_exp: "Experience", nav_proj: "Projects", nav_blog: "Blog",
        bg_about: "SYS.INFO", sub_about: "/01 PROFILE", title_about_1: "System", title_about_2: "Architecture",
        bg_edu: "ACADEMY", sub_edu: "/01.2 FOUNDATION", title_edu_1: "Academic", title_edu_2: "Background",
        msc_badge: "CURRENTLY READING", msc_title: "MSc in Software and AI", msc_uni: "Dong-Eui University", msc_loc: "Busan, South Korea",
        bg_cert: "CERTS", sub_cert: "/01.5 CREDENTIALS", title_cert_1: "Verified", title_cert_2: "Expertise",
        bg_exp: "TIMELINE", sub_exp: "/02 CAREER", title_exp_1: "Execution", title_exp_2: "Log",
        bg_proj: "DEPLOYMENTS", sub_proj: "/03 PROJECTS", title_proj_1: "Live", title_proj_2: "Architecture",
        sub_contact: "/04 CONNECT", footer_text: "Engineered & Deployed by Niwantha Wickramasingha ☕",
        scroll_down: "SCROLL",
        
        hero_name_1: "NIWANTHA", hero_name_2: "WICKRAMASINGHA",
        hero_desc: "Architecting secure, scalable, and automated cloud infrastructures. Empowering organizations through Microsoft Azure, Kubernetes, and advanced CI/CD pipelines.",
        hero_btn: "INITIATE CONTACT", badge_1: "AZURE EXPERT", badge_2: "CLOUD NATIVE", badge_3: "INFRA AS CODE",
        
        about_p1: "Experienced <strong>Cloud Engineer</strong> with a strong focus on cloud infrastructure and automation, specializing in the <strong>Microsoft Azure ecosystem</strong>.",
        about_p2: "As a <strong>Microsoft Certified Trainer (MCT)</strong>, I hold multiple Azure certifications in Solutions Architecture, DevOps, Security, and Administration.",
        about_p3: "Proven expertise in deploying cloud-native services using <strong>Infrastructure as Code (Terraform)</strong>, building CI/CD pipelines, and working with <strong>Docker and Kubernetes</strong>. Skilled in robust monitoring solutions using Grafana and Prometheus.",
        stat_exp: "Years Exp.", stat_cert: "Certifications", stat_proj: "Projects",
        
        edu_list: [
            { title: "B.Eng (Hons) Computer Network (2nd Upper)", uni: "Metropoliton University, London" },
            { title: "HND In Network Engineering", uni: "Pearson, United Kingdom" },
            { title: "Diploma In Information Technology", uni: "Pearson, United Kingdom" }
        ],

        certs: [
            { img: "cert-png/Azure Solutions Architect Expert.png", name: "Azure Solutions Architect Expert" },
            { img: "cert-png/DevOps Engineer Expert.png", name: "DevOps Engineer Expert" },
            { img: "cert-png/Github action.png", name: "GitHub Actions" },
            { img: "cert-png/Azure Administrator.png", name: "Azure Administrator Associate" },
            { img: "cert-png/Azure Security Engineer Associate.png", name: "Azure Security Engineer Associate" },
            { img: "cert-png/Azure Virtual Desktop Specialty.png", name: "Azure Virtual Desktop Specialty" },
            { img: "cert-png/Teams Administrator Associate.png", name: "Teams Administrator Associate" },
            { img: "cert-png/Azure Fundamentals.png", name: "Azure Fundamentals" },
            { img: "cert-png/Security, Compliance, and Identity Fundamentals.png", name: "Security, Compliance, and Identity Fundamentals" },
            { img: "cert-png/Google IT Support Professional Certificate.png", name: "Google IT Support Professional Certificate" },
            { img: "cert-png/GitHub Foundations.png", name: "GitHub Foundations" }
        ],

        exp_list: [
            {
                date: "Nov 2024 - Present", role: "Cloud Engineer", company: "TechOne Global Pvt Ltd",
                desc: "Lead presales activities, Azure Infra & DevOps technical discussions. Architect cloud solutions adhering to MS 'Well-Architected' framework.",
                bullets: [
                    "Designed and deployed secure, scalable Azure infrastructure using Terraform (IaC), aligned with Microsoft Well-Architected Framework for performance, governance, and cost optimization.",
                    "Operated and improved Azure-based cloud platforms, focusing on stable and cost-effective PaaS services (App Services, Azure SQL) across test and production environments.",
                    "Partnered closely with developers and testers to understand needs, resolve platform-level issues, and continuously improve the developer experience.",
                    "Designed and maintained CI/CD pipelines and release workflows via Azure DevOps and GitHub Actions, implementing secure deployment patterns and developer guardrails.",
                    "Monitored platform behavior, troubleshooted issues, and supported meaningful alerting using Application Insights, Log Analytics, and KQL queries.",
                    "Authored and maintained clear technical documentation, runbooks, and playbooks using Jira and workflow tooling to support repeatable operations and knowledge sharing.",
                    "Conducted Azure health checks, performance assessments, and capacity reviews to ensure high availability and business continuity."
                ],
                btn_expand: "[+] Expand Log", btn_collapse: "[-] Collapse Log"
            },
            {
                date: "Sep 2023 - Aug 2024", role: "Systems Engineer", company: "DirectFN (Mubasher Development Centre)",
                desc: "Led implementations of DirectFN Brokerage Solutions across Asia Region.",
                bullets: [
                    "Managed highly resilient, scalable infrastructure for a high-throughput, product-led FinTech platform (DirectFN Brokerage Solutions), ensuring 99.99% uptime for critical global trading systems.",
                    "Managed highly resilient, scalable infrastructure for a high-throughput, global FinTech SaaS platform, ensuring 99.99% uptime for critical trading systems.",
                    "Built and maintained automation and developer tooling to create 'golden paths' for developers, shifting from traditional IT hand-offs to an enablement-focused platform engineering model.",
                    "Embedded DevSecOps practices into delivery workflows, safely handling secrets and sensitive configurations via Azure Key Vault, Managed Identities, and strict RBAC.",
                    "Maintained cloud networking concepts including VNets, Subnets, and Private Endpoints to secure service-to-service access and API gateways.",
                    "Orchestrated containerized environments (Kubernetes/AKS, Docker), aligning platform architecture with long-term scaling and cost optimization strategies."
                ],
                btn_expand: "[+] Expand Log", btn_collapse: "[-] Collapse Log"
            },
            {
                date: "Nov 2022 - Apr 2023", role: "IT Support Specialist (NOC)", company: "Eureka Technology Partners",
                desc: "Managed Entra ID, Microsoft 365 portals, VPNs, and VMware instances for global clients.",
                bullets: [
                    "Handled internal SQL databases, patching, Windows Server 2016 management.",
                    "Installed and configured Zimbra Email Servers."
                ],
                btn_expand: "[+] Expand Log", btn_collapse: "[-] Collapse Log"
            },
            {
                date: "Aug 2021 - Oct 2022", role: "IT Assistant Admin", company: "ZAG Officials Pvt Ltd",
                desc: "Ensured optimal functionality of network devices (FortiGate), M365 compliance, and DigitalOcean Linux droplets.",
                bullets: [],
                btn_expand: "[+] Expand Log", btn_collapse: "[-] Collapse Log"
            }
        ],

        proj_list: [
            {
                id: "proj1", img: "project-06.png", tags: ["AZURE", "SQL", "PYTHON"],
                title: "Secure Azure Web Architecture & SQL HA Cluster",
                desc: "Production-grade Azure infra featuring App Gateway, Python App Service, and SQL Always On Availability Groups.",
                btn: "DECRYPT",
                modal_html: `
                    <h4 style="color:var(--neon-cyan); margin: 30px 0 15px; font-family:var(--font-code); font-weight:800;">Architecture Highlights:</h4>
                    <ul style="list-style:none; margin-bottom:30px;">
                        <li>Azure Application Gateway (WAF) with SSL Termination</li>
                        <li>Hybrid Compute: Nginx VM (Frontend) & Python App Service (Backend)</li>
                        <li>SQL Always On Availability Group (Primary & Secondary Nodes)</li>
                        <li>Internal Load Balancer (ILB) for Database High Availability</li>
                        <li>Active Directory (AD DC) Integration for Authentication</li>
                        <li>Secure Management via VPN Gateway (Site-to-Site Tunnel)</li>
                    </ul>
                    <h4 style="color:var(--neon-cyan); margin: 30px 0 15px; font-family:var(--font-code); font-weight:800;">Live Demo & Access:</h4>
                    <ul style="list-style:none; margin-bottom:30px;">
                        <li>Main Site: <a href="https://kloudschool.dev" target="_blank" style="color:white; text-decoration:underline; text-decoration-color:var(--neon-cyan);">https://kloudschool.dev</a></li>
                        <li>CI/CD: GitHub Actions Automated Deployment</li>
                    </ul>
                    <h4 style="color:var(--neon-cyan); margin: 30px 0 15px; font-family:var(--font-code); font-weight:800;">Use Cases:</h4>
                    <p>Perfect for enterprise-grade applications requiring Zero Downtime (HA), strict network isolation (VNet), and secure VPN-based administration.</p>
                `
            },
            {
                id: "proj2", img: "project-05.jpg", tags: ["OPENAI", "TRAFFIC MANAGER"], delay: "0.1s",
                title: "ConvertSoon: Enterprise AI Hybrid Cloud Platform",
                desc: "A Python-based global SaaS solution built on the Microsoft Ecosystem, utilizing Azure Traffic Manager and Azure OpenAI.",
                btn: "DECRYPT",
                modal_html: `
                    <p>A flagship enterprise-grade product built entirely on the Microsoft Emerging Tech Stack. This Python-based engine utilizes a Hybrid Cloud Architecture to deliver fast, secure, and complex document conversions (PDF to Word/Excel) without the security headaches 🛡️.</p>
                    <h4 style="color:var(--neon-cyan); margin: 30px 0 15px; font-family:var(--font-code); font-weight:800;">Architecture & Tech Stack:</h4>
                    <ul style="list-style:none; margin-bottom:30px;">
                        <li>Global Scale: Azure Traffic Manager for geo-routing & low latency</li>
                        <li>AI Core: Azure OpenAI Integration for 100% private, complex data extraction</li>
                        <li>Hybrid Management: Azure Arc & Update Manager for unified governance</li>
                        <li>Security First: Azure Defender for Servers (Threat Protection)</li>
                        <li>Codebase: Custom High-Performance Python Engine</li>
                    </ul>
                    <h4 style="color:var(--neon-cyan); margin: 30px 0 15px; font-family:var(--font-code); font-weight:800;">Live Platform:</h4>
                    <p>Official Site: <a href="https://convertsoon.com" target="_blank" style="color:white; text-decoration:underline; text-decoration-color:var(--neon-cyan);">https://convertsoon.com</a></p>
                `
            },
            {
                id: "proj3", img: "project-01.jpg", tags: ["JENKINS", "DOCKER", "SONAR"], delay: "0.2s",
                title: "Secure & Scalable DevOps Automation Infrastructure",
                desc: "I’ve implemented a cost-effective and highly secure DevOps automation environment suitable for startups, entry-level teams...",
                btn: "DECRYPT",
                modal_html: `
                    <p>I’ve implemented a cost-effective and highly secure DevOps automation environment suitable for startups, entry-level teams, or even high-capacity enterprises 💼.</p>
                    <h4 style="color:var(--neon-cyan); margin: 30px 0 15px; font-family:var(--font-code); font-weight:800;">Setup Highlights:</h4>
                    <ul style="list-style:none; margin-bottom:30px;">
                        <li>Azure Linux VM with Dockerized Jenkins and SonarQube</li>
                        <li>All local inbound access is blocked (Server & NSG level)</li>
                        <li>SSL enabled with domain mapping</li>
                        <li>Public IP whitelisting for secure access</li>
                        <li>Health-check cronjob every minute – auto restarts containers if stopped</li>
                    </ul>
                    <h4 style="color:var(--neon-cyan); margin: 30px 0 15px; font-family:var(--font-code); font-weight:800;">Live Demo URLs:</h4>
                    <ul style="list-style:none; margin-bottom:30px;">
                        <li>Main site: <a href="https://kloudkafe.org" target="_blank" style="color:white; text-decoration:underline; text-decoration-color:var(--neon-cyan);">https://kloudkafe.org</a></li>
                        <li>GitHub Repo: <a href="https://lnkd.in/g-Hdp_Bs" target="_blank" style="color:white; text-decoration:underline; text-decoration-color:var(--neon-cyan);">Full code & infra</a></li>
                    </ul>
                `
            },
            {
                id: "proj4", img: "project-04.jpg", tags: ["AKS", "K8S", "GITLAB"], delay: "0s",
                title: "Jenkins with CICD Pipeline implementation (AKS)",
                desc: "An End-to-End DevOps Project for Kubernetes using Azure, Jenkins, & GitLab. This setup reflects real-world DevOps practices...",
                btn: "DECRYPT",
                modal_html: `
                    <p>Proud to share a complete DevOps pipeline I recently implemented! 🔧🌐</p>
                    <h4 style="color:var(--neon-cyan); margin: 30px 0 15px; font-family:var(--font-code); font-weight:800;">Pipeline Details:</h4>
                    <ul style="list-style:none; margin-bottom:30px;">
                        <li>CI/CD Pipeline powered by Jenkins (Groovy scripted)</li>
                        <li>Code Quality Checks with SonarQube</li>
                        <li>Container Image Management via Azure Container Registry (ACR)</li>
                        <li>UAT Environment deployed to DigitalOcean Kubernetes Cluster</li>
                        <li>Production Deployment on Azure Kubernetes Service (AKS)</li>
                        <li>GitLab Integration – Automatically triggers Jenkins pipeline on code push</li>
                        <li>Pre-Prod Approval Step for enhanced deployment security</li>
                    </ul>
                    <p>Project Code Repo: GitLab - <a href="https://lnkd.in/g3XbG2G3" target="_blank" style="color:white; text-decoration:underline; text-decoration-color:var(--neon-cyan);">https://lnkd.in/g3XbG2G3</a></p>
                `
            },
            {
                id: "proj5", img: "project-02.jpg", tags: ["VPN", "NETWORKING", "AZURE"], delay: "0.1s",
                title: "Secure Access from On-Premises to Azure",
                desc: "I implemented a hybrid networking project in Azure, enabling secure communication from an on-premises environment to Azure-hosted resources using IPSec...",
                btn: "DECRYPT",
                modal_html: `
                    <p>I implemented a hybrid networking project in Azure, enabling secure communication from an on-premises environment to Azure-hosted resources using IPSec (IKEv2) VPN tunneling.</p>
                    <h4 style="color:var(--neon-cyan); margin: 30px 0 15px; font-family:var(--font-code); font-weight:800;">Architecture Overview:</h4>
                    <ul style="list-style:none; margin-bottom:30px;">
                        <li>Hub VNet (192.168.0.0/24) – Hosted the Azure VPN Gateway</li>
                        <li>Spoke 1 VNet (192.168.1.0/24) – Deployed Nginx Web Server on a VM</li>
                        <li>Spoke 2 VNet (192.168.3.0/24) – Hosted Azure MySQL Flexible Server (Private Access only)</li>
                        <li>All VNets are peered, allowing seamless communication.</li>
                        <li>On-premises environment simulated using another Azure tenant + VNet with Windows Server 2022 configured as a router via RRAS.</li>
                    </ul>
                    <h4 style="color:var(--neon-cyan); margin: 30px 0 15px; font-family:var(--font-code); font-weight:800;">The Result:</h4>
                    <p>Successfully accessed Azure-hosted MySQL Flexible Server and Web App over private IP via a secure IPSec VPN tunnel.</p>
                `
            },
            {
                id: "proj6", img: "project-03.jpg", tags: ["VNET", "PEERING", "AZURE"], delay: "0.2s",
                title: "Azure VNet Peering Across Tenants",
                desc: "Are you managing multiple Azure tenants and need secure, low-latency connectivity between virtual networks? This project explains how...",
                btn: "DECRYPT",
                modal_html: `
                    <p>Are you managing multiple Azure tenants and need secure, low-latency connectivity between virtual networks? 🤔</p>
                    <p>In this project, I explain how to implement VNet peering across different Azure tenants with best practices, key considerations, and real-world architecture.</p>
                    <h4 style="color:var(--neon-cyan); margin: 30px 0 15px; font-family:var(--font-code); font-weight:800;">What you’ll learn:</h4>
                    <ul style="list-style:none; margin-bottom:30px;">
                        <li>What is Azure VNet Peering across tenants</li>
                        <li>Role requirements and access controls</li>
                        <li>Step-by-step configuration with portal</li>
                    </ul>
                    <p>Read the full article here 👉 <a href="https://lnkd.in/gau2vdaS" target="_blank" style="color:white; text-decoration:underline; text-decoration-color:var(--neon-cyan);">https://lnkd.in/gau2vdaS</a></p>
                `
            }
        ],
        term_p1: "cat contact_info.txt",
        term_p2: "Email: <a href='mailto:niwanthawick@outlook.com'>niwanthawick@outlook.com</a><br>LinkedIn: <a href='https://linkedin.com/in/niwantha-wickramasingha' target='_blank'>linkedin.com/in/niwantha-wickramasingha</a><br>Blog: <a href='https://kloudschool.com' target='_blank'>kloudschool.com</a>",
        term_p3: "./send_message.sh",
        term_p4: "My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
        term_btn: "[ Execute Email Client ]"
    },
    
    ko: {
        nav_about: "소개", nav_skills: "기술", nav_edu: "교육", nav_exp: "경력", nav_proj: "프로젝트", nav_blog: "블로그",
        bg_about: "시스템.정보", sub_about: "/01 프로필", title_about_1: "시스템", title_about_2: "아키텍처",
        bg_edu: "아카데미", sub_edu: "/01.2 기초", title_edu_1: "학력", title_edu_2: "배경",
        msc_badge: "현재 재학중", msc_title: "소프트웨어 및 인공지능 석사", msc_uni: "동의대학교", msc_loc: "대한민국, 부산",
        bg_cert: "자격증", sub_cert: "/01.5 인증", title_cert_1: "검증된", title_cert_2: "전문성",
        bg_exp: "타임라인", sub_exp: "/02 경력", title_exp_1: "실행", title_exp_2: "로그",
        bg_proj: "배포", sub_proj: "/03 프로젝트", title_proj_1: "라이브", title_proj_2: "아키텍처",
        sub_contact: "/04 연락처", footer_text: "디자인 및 제작: Niwantha Wickramasingha ☕",
        scroll_down: "스크롤",
        
        hero_name_1: "니완타", hero_name_2: "위크라마싱하",
        hero_desc: "안전하고 확장 가능하며 자동화된 클라우드 인프라를 설계합니다. Microsoft Azure, Kubernetes 및 고급 CI/CD 파이프라인을 통해 조직의 역량을 강화합니다.",
        hero_btn: "연락하기", badge_1: "AZURE 전문가", badge_2: "클라우드 네이티브", badge_3: "코드형 인프라",
        
        about_p1: "클라우드 인프라 및 자동화에 중점을 둔 숙련된 <strong>클라우드 엔지니어</strong>로, <strong>Microsoft Azure 생태계</strong>를 전문으로 합니다.",
        about_p2: "<strong>Microsoft 공인 트레이너(MCT)</strong>로서 솔루션 아키텍처, DevOps, 보안 및 관리 분야에서 다수의 Azure 자격증을 보유하고 있습니다.",
        about_p3: "<strong>코드형 인프라(Terraform)</strong>를 사용하여 클라우드 네이티브 서비스를 배포하고, CI/CD 파이프라인을 구축하며, <strong>Docker 및 Kubernetes</strong>와 작업한 경험이 입증되었습니다. Grafana 및 Prometheus를 사용한 모니터링 솔루션에 능숙합니다.",
        stat_exp: "경력 (년)", stat_cert: "자격증", stat_proj: "프로젝트",
        
        edu_list: [
            { title: "컴퓨터 네트워크 공학 학사 (우등)", uni: "런던 메트로폴리탄 대학교" },
            { title: "네트워크 공학 HND", uni: "피어슨, 영국" },
            { title: "정보 기술 디플로마", uni: "피어슨, 영국" }
        ],

        certs: [
            { img: "cert-png/Azure Solutions Architect Expert.png", name: "Azure 솔루션 아키텍트 전문가" },
            { img: "cert-png/DevOps Engineer Expert.png", name: "DevOps 엔지니어 전문가" },
            { img: "cert-png/Github action.png", name: "GitHub Actions" },
            { img: "cert-png/Azure Administrator.png", name: "Azure 관리자" },
            { img: "cert-png/Azure Security Engineer Associate.png", name: "Azure 보안 엔지니어" },
            { img: "cert-png/Azure Virtual Desktop Specialty.png", name: "Azure 가상 데스크톱 전문" },
            { img: "cert-png/Teams Administrator Associate.png", name: "Teams 관리자" },
            { img: "cert-png/Azure Fundamentals.png", name: "Azure 기본 사항" },
            { img: "cert-png/Security, Compliance, and Identity Fundamentals.png", name: "보안, 규정 준수 및 ID 기본 사항" },
            { img: "cert-png/Google IT Support Professional Certificate.png", name: "Google IT 지원 전문가" },
            { img: "cert-png/GitHub Foundations.png", name: "GitHub Foundations" }
        ],

        exp_list: [
            {
                date: "2024년 11월 - 현재", role: "클라우드 엔지니어", company: "TechOne Global Pvt Ltd",
                desc: "프리세일즈 활동, Azure 인프라 및 DevOps 기술 논의를 주도합니다. MS 'Well-Architected' 프레임워크를 준수하는 클라우드 솔루션을 설계합니다.",
                bullets: [
                    "Terraform(IaC)을 사용하여 안전하고 확장 가능한 Azure 인프라를 설계 및 배포하고, 성능, 거버넌스 및 비용 최적화를 위해 Microsoft Well-Architected Framework에 맞게 조정했습니다.",
                    "테스트 및 프로덕션 환경 전반에서 안정적이고 비용 효율적인 PaaS 서비스(App Services, Azure SQL)에 중점을 두고 Azure 기반 클라우드 플랫폼을 운영하고 개선했습니다.",
                    "개발자 및 테스터와 긴밀히 협력하여 요구 사항을 이해하고 플랫폼 수준의 문제를 해결하며 개발자 경험을 지속적으로 개선했습니다.",
                    "Azure DevOps 및 GitHub Actions를 통해 CI/CD 파이프라인과 릴리스 워크플로우를 설계 및 유지 관리하고, 안전한 배포 패턴과 개발자 가드레일을 구현했습니다.",
                    "Application Insights, Log Analytics 및 KQL 쿼리를 사용하여 플랫폼 동작을 모니터링하고, 문제를 해결하며, 의미 있는 알림을 지원했습니다.",
                    "반복 가능한 운영 및 지식 공유를 지원하기 위해 Jira 및 워크플로우 도구를 사용하여 명확한 기술 문서, 런북 및 플레이북을 작성하고 유지 관리했습니다.",
                    "고가용성 및 비즈니스 연속성을 보장하기 위해 Azure 상태 점검, 성능 평가 및 용량 검토를 수행했습니다."
                ],
                btn_expand: "[+] 로그 확장", btn_collapse: "[-] 로그 축소"
            },
            {
                date: "2023년 9월 - 2024년 8월", role: "시스템 엔지니어", company: "DirectFN (Mubasher Development Centre)",
                desc: "아시아 지역 전역에서 DirectFN 브로커리지 솔루션 구현을 주도했습니다.",
                bullets: [
                    "대용량 트래픽을 처리하는 제품 중심의 핀테크 플랫폼(DirectFN Brokerage Solutions)을 위해 복원력이 뛰어나고 확장 가능한 인프라를 관리하여 중요한 글로벌 거래 시스템의 99.99% 가동 시간을 보장했습니다.",
                    "대용량 트래픽을 처리하는 글로벌 핀테크 SaaS 플랫폼을 위해 복원력이 뛰어나고 확장 가능한 인프라를 관리하여 중요한 거래 시스템의 99.99% 가동 시간을 보장했습니다.",
                    "개발자를 위한 '골든 패스(golden paths)'를 생성하는 자동화 및 개발자 도구를 구축 및 유지 관리하여, 기존의 IT 인수인계 방식에서 지원 중심의 플랫폼 엔지니어링 모델로 전환했습니다.",
                    "DevSecOps 방식을 배포 워크플로우에 통합하고, Azure Key Vault, 관리 ID(Managed Identities) 및 엄격한 역할 기반 액세스 제어(RBAC)를 통해 비밀 정보 및 민감한 구성을 안전하게 처리했습니다.",
                    "서비스 간 액세스 및 API 게이트웨이를 보호하기 위해 VNet, 서브넷 및 프라이빗 엔드포인트를 포함한 클라우드 네트워킹 개념을 유지 관리했습니다.",
                    "장기적인 확장 및 비용 최적화 전략에 맞게 플랫폼 아키텍처를 조정하면서 컨테이너화된 환경(Kubernetes/AKS, Docker)을 오케스트레이션했습니다."
                ],
                btn_expand: "[+] 로그 확장", btn_collapse: "[-] 로그 축소"
            },
            {
                date: "2022년 11월 - 2023년 4월", role: "IT 지원 전문가 (NOC)", company: "Eureka Technology Partners",
                desc: "글로벌 고객을 위한 Entra ID, Microsoft 365 포털, VPN 및 VMware 인스턴스를 관리했습니다.",
                bullets: [
                    "내부 SQL 데이터베이스, 패치 적용, Windows Server 2016 관리를 처리했습니다.",
                    "Zimbra 이메일 서버 설치 및 구성."
                ],
                btn_expand: "[+] 로그 확장", btn_collapse: "[-] 로그 축소"
            },
            {
                date: "2021년 8월 - 2022년 10월", role: "IT 어시스턴트 관리자", company: "ZAG Officials Pvt Ltd",
                desc: "네트워크 장치(FortiGate), M365 규정 준수 및 DigitalOcean Linux 드롭릿의 최적 기능을 보장했습니다.",
                bullets: [],
                btn_expand: "[+] 로그 확장", btn_collapse: "[-] 로그 축소"
            }
        ],

        proj_list: [
            {
                id: "proj1", img: "project-06.png", tags: ["AZURE", "SQL", "PYTHON"],
                title: "안전한 Azure 웹 아키텍처 및 SQL HA 클러스터",
                desc: "App Gateway, Python App Service 및 SQL Always On 가용성 그룹을 특징으로 하는 프로덕션 등급 Azure 인프라.",
                btn: "복호화",
                modal_html: `
                    <h4 style="color:var(--neon-cyan); margin: 30px 0 15px; font-family:var(--font-code); font-weight:800;">아키텍처 하이라이트:</h4>
                    <ul style="list-style:none; margin-bottom:30px;">
                        <li>SSL 종료 기능이 있는 Azure Application Gateway (WAF)</li>
                        <li>하이브리드 컴퓨팅: Nginx VM 및 Python App Service</li>
                        <li>SQL Always On 가용성 그룹 (프라이머리 및 세컨더리 노드)</li>
                        <li>Active Directory (AD 조인)</li>
                    </ul>
                    <p>메인 사이트: <a href="https://kloudschool.dev" target="_blank" style="color:white;">https://kloudschool.dev</a></p>
                `
            },
            {
                id: "proj2", img: "project-05.jpg", tags: ["OPENAI", "TRAFFIC MANAGER"], delay: "0.1s",
                title: "ConvertSoon: 엔터프라이즈 AI 하이브리드 클라우드",
                desc: "안전한 문서 변환을 위해 Azure Traffic Manager 및 Azure OpenAI를 사용하는 글로벌 SaaS 솔루션.",
                btn: "복호화",
                modal_html: `
                    <h4 style="color:var(--neon-cyan); margin: 30px 0 15px; font-family:var(--font-code); font-weight:800;">아키텍처 및 기술 스택:</h4>
                    <ul style="list-style:none; margin-bottom:30px;">
                        <li>글로벌 스케일: 지역 라우팅을 위한 Azure Traffic Manager</li>
                        <li>AI 코어: 프라이빗 데이터 추출을 위한 Azure OpenAI 통합</li>
                        <li>하이브리드 관리: Azure Arc 및 업데이트 관리자</li>
                        <li>보안: 서버용 Azure Defender</li>
                    </ul>
                    <p>라이브: <a href="https://convertsoon.com" target="_blank" style="color:white;">https://convertsoon.com</a></p>
                `
            },
            {
                id: "proj3", img: "project-01.jpg", tags: ["JENKINS", "DOCKER", "SONAR"], delay: "0.2s",
                title: "DevOps 자동화 인프라",
                desc: "Dockerized Jenkins 및 SonarQube를 사용하는 비용 효율적이고 매우 안전한 DevOps 자동화 환경.",
                btn: "복호화",
                modal_html: `
                    <h4 style="color:var(--neon-cyan); margin: 30px 0 15px; font-family:var(--font-code); font-weight:800;">설정 하이라이트:</h4>
                    <ul style="list-style:none; margin-bottom:30px;">
                        <li>Dockerized Jenkins 및 SonarQube가 있는 Azure Linux VM</li>
                        <li>인바운드 액세스 차단 (서버 및 NSG 레벨) + IP 화이트리스팅</li>
                        <li>상태 확인 크론잡 (매 분)</li>
                    </ul>
                    <p>저장소: <a href="https://lnkd.in/g-Hdp_Bs" target="_blank" style="color:white;">GitHub 링크</a></p>
                `
            },
            {
                id: "proj4", img: "project-04.jpg", tags: ["AKS", "K8S", "GITLAB"], delay: "0s",
                title: "Jenkins CI/CD 파이프라인 (AKS)",
                desc: "Azure, Jenkins(Groovy) 및 GitLab을 사용하는 Kubernetes용 엔드투엔드 DevOps 프로젝트.",
                btn: "복호화",
                modal_html: `
                    <h4 style="color:var(--neon-cyan); margin: 30px 0 15px; font-family:var(--font-code); font-weight:800;">파이프라인 세부 정보:</h4>
                    <ul style="list-style:none; margin-bottom:30px;">
                        <li>Jenkins(Groovy 스크립트)로 구동되는 CI/CD</li>
                        <li>Azure Container Registry(ACR)를 통한 컨테이너 이미지 관리</li>
                        <li>Azure Kubernetes Service(AKS)에 프로덕션 배포</li>
                    </ul>
                `
            },
            {
                id: "proj5", img: "project-02.jpg", tags: ["VPN", "NETWORKING", "AZURE"], delay: "0.1s",
                title: "온프레미스에서 Azure로의 안전한 액세스",
                desc: "IPSec VPN 터널링을 사용하여 온프레미스 환경에서 Azure 호스팅 리소스로의 통신을 가능하게 하는 하이브리드 네트워킹 프로젝트...",
                btn: "복호화",
                modal_html: `
                    <p>IPSec VPN을 사용한 하이브리드 네트워킹 구성</p>
                `
            },
            {
                id: "proj6", img: "project-03.jpg", tags: ["VNET", "PEERING", "AZURE"], delay: "0.2s",
                title: "테넌트 간 Azure VNet 피어링",
                desc: "여러 Azure 테넌트를 관리하며 가상 네트워크 간 안전하고 지연 시간이 짧은 연결이 필요한 경우를 위한 프로젝트...",
                btn: "복호화",
                modal_html: `
                    <p>테넌트 간 VNet 피어링 구현 방법</p>
                `
            }
        ],
        term_p1: "cat contact_info.txt",
        term_p2: "이메일: <a href='mailto:niwanthawick@outlook.com'>niwanthawick@outlook.com</a><br>링크드인: <a href='https://linkedin.com/in/niwantha-wickramasingha' target='_blank'>linkedin.com/in/niwantha-wickramasingha</a><br>블로그: <a href='https://kloudschool.com' target='_blank'>kloudschool.com</a>",
        term_p3: "./send_message.sh",
        term_p4: "제 받은 편지함은 항상 열려 있습니다. 질문이 있거나 그냥 인사하고 싶으시면 최선을 다해 답변해 드리겠습니다!",
        term_btn: "[ 이메일 클라이언트 실행 ]"
    }
};

let currentLang = 'en';

// --- RENDER FUNCTIONS ---
function renderContent() {
    const data = i18n[currentLang];
    
    // 1. Simple Data Attributes - Added FIX for Issue #3
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) {
            el.innerHTML = data[key];
            // Fix glitch text overlay showing English behind Korean
            if (el.hasAttribute('data-text')) {
                el.setAttribute('data-text', data[key]);
            }
        }
    });

    // 2. Render About Text
    const aboutContainer = document.getElementById('about-text-container');
    aboutContainer.innerHTML = `
        <p>${data.about_p1}</p>
        <p>${data.about_p2}</p>
        <p>${data.about_p3}</p>
    `;
    
    // 3. Render Education
    const eduContainer = document.getElementById('edu-grid-container');
    let eduHtml = '';
    data.edu_list.forEach((edu, index) => {
        const delay = index * 0.1;
        eduHtml += `
            <div class="edu-card reveal" style="transition-delay: ${delay}s">
                <div class="edu-icon"><i class="fas fa-graduation-cap"></i></div>
                <div class="edu-content">
                    <h3>${edu.title}</h3>
                    <p>${edu.uni}</p>
                </div>
            </div>
        `;
    });
    eduContainer.innerHTML = eduHtml;
    
    // 4. Render Certificates
    const certContainer = document.getElementById('cert-grid-container');
    let certHtml = '';
    data.certs.forEach((cert, index) => {
        const delay = (index % 4) * 0.1;
        certHtml += `
            <div class="cert-item glitch-hover-target magnetic-target reveal" style="transition-delay: ${delay}s">
                <img src="${cert.img}" alt="Cert">
                <span class="font-display">${cert.name}</span>
            </div>
        `;
    });
    certContainer.innerHTML = certHtml;

    // 5. Render Experience Timeline
    const timelineContainer = document.getElementById('timeline-container');
    const lines = `
        <div class="timeline-line"></div>
        <div class="timeline-progress" id="timeline-progress"></div>
    `;
    let timelineHtml = lines;
    
    data.exp_list.forEach((job, index) => {
        let bulletsHtml = '';
        if(job.bullets.length > 0) {
            bulletsHtml = `<ul>${job.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
            <button class="read-more-btn magnetic-target" onclick="toggleDesc(this)" data-exp="${job.btn_expand}" data-col="${job.btn_collapse}">${job.btn_expand}</button>`;
        }
        
        timelineHtml += `
            <div class="time-item reveal">
                <div class="time-node"></div>
                <div class="time-content card-glow-track">
                    <span class="time-date">${job.date}</span>
                    <h3 class="time-role font-display">${job.role}</h3>
                    <div class="time-company">${job.company}</div>
                    <div class="time-desc font-display">
                        ${job.desc}
                        ${bulletsHtml}
                    </div>
                </div>
            </div>
        `;
    });
    timelineContainer.innerHTML = timelineHtml;

    // 6. Render Projects
    const projectContainer = document.getElementById('project-grid-container');
    let projectHtml = '';
    data.proj_list.forEach((proj) => {
        const tagsHtml = proj.tags.map(t => `<span class="font-code text-[var(--neon-cyan)] text-sm pr-2 border-r border-[rgba(255,255,255,0.2)] mr-2 last:border-0">${t}</span>`).join('');
        
        projectHtml += `
            <div class="p-card tilt-card reveal magnetic-target card-glow-track" onclick="openModal('${proj.id}')" style="transition-delay: ${proj.delay || '0s'};">
                <div class="p-img-wrapper">
                    <img src="${proj.img}" alt="Project" class="p-img">
                    <div class="p-overlay"></div>
                    <div class="p-tags">${proj.tags.map(t => `<div class="p-tag">${t}</div>`).join('')}</div>
                </div>
                <div class="p-content">
                    <h3 class="p-title font-display">${proj.title}</h3>
                    <p class="p-desc font-display">${proj.desc}</p>
                    <div class="p-footer">
                        <div>${tagsHtml}</div>
                        <button class="view-btn">${proj.btn} <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
                <div id="${proj.id}-data" class="hidden" style="display:none;">${proj.modal_html}</div>
            </div>
        `;
    });
    projectContainer.innerHTML = projectHtml;

    bindDynamicEvents();
}

/* ==========================================================================
   ENGINE INITIALIZATION
   ========================================================================== */
window.addEventListener('load', () => {
    renderContent();
    const loadBar = document.getElementById('load-bar');
    if (loadBar) loadBar.style.width = '100%';
    
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }
        initTypewriter();
    }, 1200);
});

/* ==========================================================================
   LANGUAGE SWITCHER
   ========================================================================== */
const langToggle = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');
const glitchOverlay = document.getElementById('glitch-overlay');

langToggle.addEventListener('click', () => {
    glitchOverlay.classList.add('active');
    
    setTimeout(() => {
        if (currentLang === 'en') {
            currentLang = 'ko';
            langText.innerText = 'ENGLISH';
            document.body.classList.add('lang-ko');
        } else {
            currentLang = 'en';
            langText.innerText = '한국어';
            document.body.classList.remove('lang-ko');
        }
        
        renderContent();
        
        const typeTarget = document.getElementById('typewriter');
        if(typeTarget) typeTarget.textContent = '';
        isDeleting = false;
        charIndex = 0;
    }, 250); 
    
    setTimeout(() => {
        glitchOverlay.classList.remove('active');
        setTimeout(setBodyHeight, 200);
    }, 600);
});

/* ==========================================================================
   CANVAS NETWORK
   ========================================================================== */
const canvas = document.getElementById('canvas-network');
const ctx = canvas.getContext('2d');
let width, height, particles;
let mouseCanvas = { x: null, y: null };

window.addEventListener('mousemove', (e) => {
    mouseCanvas.x = e.x;
    mouseCanvas.y = e.y;
});

function initCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    particles = [];
    const particleCount = window.innerWidth < 768 ? 40 : 100;
    
    for(let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            size: Math.random() * 2.5,
            baseX: Math.random() * width,
            baseY: Math.random() * height
        });
    }
}

function drawParticles() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(0, 242, 161, 0.6)';
    ctx.strokeStyle = 'rgba(0, 198, 255, 0.15)';
    
    particles.forEach((p, index) => {
        if(mouseCanvas.x != null) {
            let dx = mouseCanvas.x - p.x;
            let dy = mouseCanvas.y - p.y;
            let dist = Math.sqrt(dx*dx + dy*dy);
            
            if(dist < 200) { 
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouseCanvas.x, mouseCanvas.y);
                ctx.strokeStyle = `rgba(0, 242, 161, ${0.2 - dist/1000})`;
                ctx.stroke();
            }
            if(dist < 100) {
                p.x -= dx * 0.03;
                p.y -= dy * 0.03;
            }
        }

        p.x += p.vx; p.y += p.vy;
        if(p.x < 0 || p.x > width) p.vx *= -1;
        if(p.y < 0 || p.y > height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        for(let j = index + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
            if(dist < 120) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(0, 198, 255, ${0.15 - dist/800})`;
                ctx.stroke();
            }
        }
    });
    requestAnimationFrame(drawParticles);
}
initCanvas(); drawParticles();
window.addEventListener('resize', initCanvas);

/* ==========================================================================
   CUSTOM SMOOTH SCROLL & OBSERVER (Lag Fix Added for Mobile)
   ========================================================================== */
const body = document.body;
const scrollWrap = document.getElementById('smooth-wrapper');
const scrollContent = document.getElementById('smooth-content');
let scrollY = window.scrollY;
let currentY = scrollY;
let ease = 0.06;

function setBodyHeight() {
    // Desktop වලදී පමණක් Custom Scroll Height එක ලබා දෙන්න
    if (window.innerWidth > 768) {
        if(scrollContent) document.body.style.height = `${scrollContent.offsetHeight}px`;
    } else {
        // Mobile වලදී Native Scroll සඳහා
        document.body.style.height = 'auto'; 
    }
}

const resizeObserver = new ResizeObserver(() => setBodyHeight());
if (scrollContent) resizeObserver.observe(scrollContent);
document.querySelectorAll('img').forEach(img => { img.addEventListener('load', setBodyHeight); });
window.addEventListener('resize', setBodyHeight);

function smoothScroll() {
    scrollY = window.scrollY;
    currentY += (scrollY - currentY) * ease;
    currentY = Math.round(currentY * 100) / 100;
    
    // Desktop වලදී පමණක් Transform එක ක්‍රියාත්මක කරන්න (Mobile Lag එක නැති කිරීමට)
    if (window.innerWidth > 768) {
        if (scrollContent) scrollContent.style.transform = `translateY(-${currentY}px)`;
    }
    
    // Top Progress Bar Sync (Mobile සහ Desktop දෙකටම වැඩ කරයි)
    const maxScroll = (window.innerWidth > 768 ? document.body.scrollHeight : document.documentElement.scrollHeight) - window.innerHeight;
    const scrollPercent = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
    const topProgress = document.getElementById('top-scroll-progress');
    if (topProgress) topProgress.style.width = `${scrollPercent}%`;
    
    // Timeline glow progress sync
    const timeline = document.getElementById('timeline-progress');
    if(timeline) {
        const timelineContainer = document.getElementById('timeline-container');
        if(timelineContainer) {
            const timelineRect = timelineContainer.getBoundingClientRect();
            const tlPercent = Math.max(0, Math.min(100, (window.innerHeight/1.5 - timelineRect.top) / timelineRect.height * 100));
            timeline.style.height = `${tlPercent}%`;
        }
    }

    // Parallax for Background Texts
    document.querySelectorAll('.sec-bg-text').forEach(text => {
        const rect = text.getBoundingClientRect();
        if(rect.top < window.innerHeight && rect.bottom > 0) {
            const yOffset = (rect.top - window.innerHeight/2) * 0.1;
            text.style.transform = `translate(-50%, calc(-50% + ${yOffset}px))`;
        }
    });

    requestAnimationFrame(smoothScroll);
}
smoothScroll();

/* ==========================================================================
   CURSOR & MOUSE TRACKING
   ========================================================================== */
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX; const posY = e.clientY;
    if (cursorDot && cursorRing) {
        cursorDot.style.left = `${posX}px`; cursorDot.style.top = `${posY}px`;
        cursorRing.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 150, fill: "forwards" });
    }
    
    document.querySelectorAll('.card-glow-track').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

function bindDynamicEvents() {
    const magneticTargets = document.querySelectorAll('.magnetic-target, a, button');
    
    magneticTargets.forEach(target => {
        target.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        target.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hover');
            target.style.transform = 'translate(0px, 0px)';
        });
        
        if(target.classList.contains('magnetic-target')) {
            target.addEventListener('mousemove', function(e) {
                const rect = target.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                target.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
        }
    });

    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if(window.innerWidth < 768) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; const y = e.clientY - rect.top;
            const centerX = rect.width / 2; const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -12;
            const rotateY = ((x - centerX) / centerX) * 12;
            card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) { 
                entry.target.classList.add('active'); 
                if(entry.target.classList.contains('time-item')) {
                    entry.target.classList.add('active');
                }
            }
        });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
    
    setTimeout(setBodyHeight, 500);
}

/* ==========================================================================
   TYPEWRITER & TERMINAL ANIMATION
   ========================================================================== */
let roleIndex = 0; let charIndex = 0; let isDeleting = false;

function initTypewriter() {
    const typeTarget = document.getElementById('typewriter');
    if(!typeTarget) return;

    const rolesEn = ["CLOUD ARCHITECT", "DEVOPS ENGINEER", "MS CERTIFIED TRAINER"];
    const rolesKo = ["클라우드 아키텍트", "데브옵스 엔지니어", "MS 공인 트레이너"];
    const currentRoles = currentLang === 'en' ? rolesEn : rolesKo;
    
    const currentRole = currentRoles[roleIndex % currentRoles.length];
    
    if(isDeleting) {
        typeTarget.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeTarget.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let speed = isDeleting ? 40 : 100;
    if(!isDeleting && charIndex === currentRole.length) { speed = 2500; isDeleting = true; }
    else if(isDeleting && charIndex === 0) { isDeleting = false; roleIndex++; speed = 600; }
    setTimeout(initTypewriter, speed);
}

const termBody = document.getElementById('term-body');
let termTyped = false;

const termObserver = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting && !termTyped) {
        termTyped = true;
        const data = i18n[currentLang];
        termBody.innerHTML = `
            <div id="t-line1"><span class="c-prompt">guest@portfolio:~$</span> <span class="c-cmd" id="t-cmd1"></span><span class="cursor-blink">_</span></div>
            <div class="c-res" id="t-res1">${data.term_p2}</div>
            <div id="t-line2" style="display:none;"><span class="c-prompt">guest@portfolio:~$</span> <span class="c-cmd" id="t-cmd2"></span><span class="cursor-blink">_</span></div>
            <div class="c-res" id="t-res2" style="color: var(--text-muted);">${data.term_p4}</div>
            <div style="margin-top: 40px; display:none;" id="t-btn">
                <a href="mailto:niwanthawick@outlook.com" class="btn-outline magnetic-target" style="display:inline-block;">${data.term_btn}</a>
            </div>
        `;
        
        typeCommand('t-cmd1', data.term_p1, () => {
            document.getElementById('t-line1').querySelector('.cursor-blink').style.display = 'none';
            document.getElementById('t-res1').classList.add('visible');
            setTimeout(setBodyHeight, 100);
            
            setTimeout(() => {
                document.getElementById('t-line2').style.display = 'block';
                typeCommand('t-cmd2', data.term_p3, () => {
                    document.getElementById('t-line2').querySelector('.cursor-blink').style.display = 'none';
                    document.getElementById('t-res2').classList.add('visible');
                    setTimeout(() => {
                        document.getElementById('t-btn').style.display = 'block';
                        bindDynamicEvents();
                        setTimeout(setBodyHeight, 100);
                    }, 500);
                });
            }, 1000);
        });
    }
}, { threshold: 0.5 });
if (termBody) termObserver.observe(document.querySelector('.terminal-contact'));

function typeCommand(elementId, text, callback) {
    const el = document.getElementById(elementId);
    let i = 0;
    const int = setInterval(() => {
        el.textContent += text.charAt(i);
        i++;
        if(i >= text.length) { clearInterval(int); setTimeout(callback, 500); }
    }, 60);
}

/* ==========================================================================
   HEADER & MOBILE MENU
   ========================================================================== */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
    const isVisible = navLinks.style.display === 'flex';
    navLinks.style.display = isVisible ? 'none' : 'flex';
    if(!isVisible) {
        navLinks.style.position = 'absolute'; navLinks.style.top = '100%';
        navLinks.style.left = '0'; navLinks.style.width = '100%';
        navLinks.style.background = 'var(--bg-surface)'; navLinks.style.padding = '30px 20px';
        navLinks.style.flexDirection = 'column'; navLinks.style.alignItems = 'flex-start';
        navLinks.style.borderBottom = '1px solid var(--neon-cyan)';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        if(window.innerWidth < 768) navLinks.style.display = 'none';
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        const targetEl = document.querySelector(targetId);
        if(targetEl) {
            const y = targetEl.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    });
});

/* ==========================================================================
   TIMELINE & MODAL LOGIC
   ========================================================================== */
function toggleDesc(btn) {
    const ul = btn.previousElementSibling;
    const expText = btn.getAttribute('data-exp');
    const colText = btn.getAttribute('data-col');
    if(ul.style.display === 'block') { ul.style.display = 'none'; btn.innerText = expText; }
    else { ul.style.display = 'block'; btn.innerText = colText; }
    setTimeout(setBodyHeight, 150);
}

const modal = document.getElementById('project-modal');
function openModal(id) {
    const card = document.querySelector(`[onclick="openModal('${id}')"]`);
    document.getElementById('m-title').innerText = card.querySelector('.p-title').innerText;
    document.getElementById('m-img').src = card.querySelector('.p-img').src;
    document.getElementById('m-desc').innerHTML = document.getElementById(`${id}-data`).innerHTML;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeModal() { 
    modal.classList.remove('active'); 
    document.body.style.overflow = 'auto';
}

modal.addEventListener('click', (e) => {
    if(e.target === modal) closeModal();
});