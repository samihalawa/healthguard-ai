import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.features': 'Features',
      'nav.pricing': 'Pricing',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.demo': 'Live Demo',
      
      // Hero Section
      'hero.title': 'AI-Powered Healthcare Location & Patient Management',
      'hero.subtitle': 'HealthGuard AI combines real-time location tracking (RTLS) with intelligent patient scheduling to optimize hospital operations, reduce wait times by 60%, and improve patient outcomes.',
      'hero.cta.primary': 'Start Free Trial',
      'hero.cta.secondary': 'Watch Demo',
      'hero.trust': 'Trusted by 500+ hospitals and healthcare facilities worldwide',
      
      // Features Section
      'features.title': 'Comprehensive Healthcare AI Solutions',
      'features.subtitle': 'Advanced technology for modern healthcare delivery and patient safety',
      'feature.rtls.title': 'Real-Time Location System (RTLS)',
      'feature.rtls.desc': 'Track patients, staff, and equipment in real-time with precision location accuracy within 3 feet.',
      'feature.scheduling.title': 'AI-Powered Patient Scheduling',
      'feature.scheduling.desc': 'Intelligent appointment optimization using machine learning to reduce wait times and maximize efficiency.',
      'feature.mapping.title': 'Interactive Hospital Floor Maps',
      'feature.mapping.desc': 'Visualize and navigate hospital spaces with dynamic maps showing real-time location data.',
      'feature.tracking.title': 'Patient Flow Management',
      'feature.tracking.desc': 'Monitor patient journeys through care pathways with predictive analytics and alerts.',
      'feature.analytics.title': 'Healthcare Analytics Dashboard',
      'feature.analytics.desc': 'Comprehensive reporting with HIPAA-compliant analytics and performance metrics.',
      'feature.integration.title': 'EHR/LIS/PACS Integration',
      'feature.integration.desc': 'Seamless integration with existing hospital systems and medical imaging systems.',
      
      // Demo Section
      'demo.title': 'Interactive Hospital Dashboard Demo',
      'demo.subtitle': 'Experience HealthGuard AI in action with our comprehensive healthcare management system',
      'demo.rtls.title': 'RTLS Dashboard',
      'demo.rtls.subtitle': 'Real-time location tracking',
      'demo.scheduling.title': 'AI Scheduling',
      'demo.scheduling.subtitle': 'Intelligent appointment management',
      'demo.mapping.title': 'Floor Mapping',
      'demo.mapping.subtitle': 'Interactive hospital navigation',
      'demo.analytics.title': 'Analytics Dashboard',
      'demo.analytics.subtitle': 'Healthcare performance metrics',
      
      // Pricing
      'pricing.title': 'Healthcare-Focused Pricing',
      'pricing.subtitle': 'Scalable solutions for healthcare facilities of all sizes',
      'pricing.starter.name': 'Clinic',
      'pricing.starter.price': '$199',
      'pricing.starter.period': '/month',
      'pricing.professional.name': 'Hospital',
      'pricing.professional.price': '$599',
      'pricing.professional.period': '/month',
      'pricing.enterprise.name': 'Health System',
      'pricing.enterprise.price': 'Custom',
      'pricing.enterprise.period': '',
      'pricing.cta': 'Start Free Trial',
      
      // Testimonials
      'testimonials.title': 'Healthcare Provider Success Stories',
      'testimonials.subtitle': 'Transforming patient care and operational efficiency',
      
      // Footer
      'footer.description': 'HealthGuard AI - Revolutionizing healthcare delivery with AI-powered location services and patient management.',
      'footer.product': 'Product',
      'footer.company': 'Company',
      'footer.support': 'Support',
      'footer.legal': 'Legal',
      'footer.copyright': '© 2024 HealthGuard AI. All rights reserved.'
    }
  },
  es: {
    translation: {
      // Navigation
      'nav.home': 'Inicio',
      'nav.features': 'Características',
      'nav.pricing': 'Precios',
      'nav.about': 'Acerca de',
      'nav.contact': 'Contacto',
      'nav.demo': 'Demo en Vivo',
      
      // Hero Section
      'hero.title': 'IA para Gestión de Ubicación y Pacientes en Salud',
      'hero.subtitle': 'HealthGuard AI combina seguimiento de ubicación en tiempo real (RTLS) con programación inteligente de pacientes para optimizar operaciones hospitalarias, reducir tiempos de espera en 60% y mejorar resultados de pacientes.',
      'hero.cta.primary': 'Comenzar Prueba Gratuita',
      'hero.cta.secondary': 'Ver Demo',
      'hero.trust': 'Confiado por más de 500 hospitales y centros de salud en todo el mundo',
      
      // Features Section
      'features.title': 'Soluciones Completas de IA para Salud',
      'features.subtitle': 'Tecnología avanzada para la entrega de atención médica moderna y seguridad del paciente',
      'feature.rtls.title': 'Sistema de Ubicación en Tiempo Real (RTLS)',
      'feature.rtls.desc': 'Rastrea pacientes, personal y equipos en tiempo real con precisión de ubicación dentro de 3 pies.',
      'feature.scheduling.title': 'Programación de Pacientes con IA',
      'feature.scheduling.desc': 'Optimización inteligente de citas usando aprendizaje automático para reducir tiempos de espera y maximizar eficiencia.',
      'feature.mapping.title': 'Mapas Interactivos de Plantas Hospitalarias',
      'feature.mapping.desc': 'Visualizar y navegar espacios hospitalarios con mapas dinámicos que muestran datos de ubicación en tiempo real.',
      'feature.tracking.title': 'Gestión de Flujo de Pacientes',
      'feature.tracking.desc': 'Monitorea recorridos de pacientes a través de rutas de atención con analítica predictiva y alertas.',
      'feature.analytics.title': 'Panel de Análisis de Salud',
      'feature.analytics.desc': 'Informes comprensivos con análisis compatible con HIPAA y métricas de rendimiento.',
      'feature.integration.title': 'Integración EHR/LIS/PACS',
      'feature.integration.desc': 'Integración perfecta con sistemas hospitalarios existentes y sistemas de imágenes médicas.',
      
      // Demo Section
      'demo.title': 'Demo Interactivo del Panel Hospitalario',
      'demo.subtitle': 'Experimenta HealthGuard AI en acción con nuestro sistema comprensivo de gestión de salud',
      'demo.rtls.title': 'Panel RTLS',
      'demo.rtls.subtitle': 'Seguimiento de ubicación en tiempo real',
      'demo.scheduling.title': 'Programación IA',
      'demo.scheduling.subtitle': 'Gestión inteligente de citas',
      'demo.mapping.title': 'Mapeo de Plantas',
      'demo.mapping.subtitle': 'Navegación hospitalaria interactiva',
      'demo.analytics.title': 'Panel de Análisis',
      'demo.analytics.subtitle': 'Métricas de rendimiento de salud',
      
      // Pricing
      'pricing.title': 'Precios Enfocados en Salud',
      'pricing.subtitle': 'Soluciones escalables para centros de salud de todos los tamaños',
      'pricing.starter.name': 'Clínica',
      'pricing.starter.price': '$199',
      'pricing.starter.period': '/mes',
      'pricing.professional.name': 'Hospital',
      'pricing.professional.price': '$599',
      'pricing.professional.period': '/mes',
      'pricing.enterprise.name': 'Sistema de Salud',
      'pricing.enterprise.price': 'Personalizado',
      'pricing.enterprise.period': '',
      'pricing.cta': 'Comenzar Prueba Gratuita',
      
      // Testimonials
      'testimonials.title': 'Historias de Éxito de Proveedores de Salud',
      'testimonials.subtitle': 'Transformando la atención al paciente y eficiencia operacional',
      
      // Footer
      'footer.description': 'HealthGuard AI - Revolucionando la entrega de salud con servicios de ubicación impulsados por IA y gestión de pacientes.',
      'footer.product': 'Producto',
      'footer.company': 'Empresa',
      'footer.support': 'Soporte',
      'footer.legal': 'Legal',
      'footer.copyright': '© 2024 HealthGuard AI. Todos los derechos reservados.'
    }
  },
  zh: {
    translation: {
      // Navigation
      'nav.home': '首页',
      'nav.features': '功能特性',
      'nav.pricing': '价格',
      'nav.about': '关于我们',
      'nav.contact': '联系我们',
      'nav.demo': '在线演示',
      
      // Hero Section
      'hero.title': 'AI驱动的医疗位置和患者管理',
      'hero.subtitle': 'HealthGuard AI 结合实时位置跟踪（RTLS）和智能患者调度，优化医院运营，将等待时间减少60%，改善患者结果。',
      'hero.cta.primary': '开始免费试用',
      'hero.cta.secondary': '观看演示',
      'hero.trust': '全球500+医院和医疗设施信赖',
      
      // Features Section
      'features.title': '全面的医疗AI解决方案',
      'features.subtitle': '现代医疗保健和患者安全的高级技术',
      'feature.rtls.title': '实时位置系统 (RTLS)',
      'feature.rtls.desc': '以3英尺内的精确位置精度实时跟踪患者、工作人员和设备。',
      'feature.scheduling.title': 'AI驱动的患者调度',
      'feature.scheduling.desc': '使用机器学习进行智能预约优化，减少等待时间并最大化效率。',
      'feature.mapping.title': '交互式医院平面图',
      'feature.mapping.desc': '通过显示实时位置数据的动态地图可视化和导航医院空间。',
      'feature.tracking.title': '患者流管理',
      'feature.tracking.desc': '通过预测分析和警报监控患者在护理路径中的旅程。',
      'feature.analytics.title': '医疗分析仪表板',
      'feature.analytics.desc': '与HIPAA兼容的分析和性能指标的全面报告。',
      'feature.integration.title': 'EHR/LIS/PACS集成',
      'feature.integration.desc': '与现有医院系统和医疗成像系统的无缝集成。',
      
      // Demo Section
      'demo.title': '交互式医院仪表板演示',
      'demo.subtitle': '通过我们的全面医疗管理系统体验HealthGuard AI的功能',
      'demo.rtls.title': 'RTLS仪表板',
      'demo.rtls.subtitle': '实时位置跟踪',
      'demo.scheduling.title': 'AI调度',
      'demo.scheduling.subtitle': '智能预约管理',
      'demo.mapping.title': '平面图映射',
      'demo.mapping.subtitle': '交互式医院导航',
      'demo.analytics.title': '分析仪表板',
      'demo.analytics.subtitle': '医疗保健性能指标',
      
      // Pricing
      'pricing.title': '医疗保健导向定价',
      'pricing.subtitle': '适用于各种规模医疗设施的可扩展解决方案',
      'pricing.starter.name': '诊所',
      'pricing.starter.price': '$199',
      'pricing.starter.period': '/月',
      'pricing.professional.name': '医院',
      'pricing.professional.price': '$599',
      'pricing.professional.period': '/月',
      'pricing.enterprise.name': '健康系统',
      'pricing.enterprise.price': '定制',
      'pricing.enterprise.period': '',
      'pricing.cta': '开始免费试用',
      
      // Testimonials
      'testimonials.title': '医疗保健提供商成功案例',
      'testimonials.subtitle': '改变患者护理和运营效率',
      
      // Footer
      'footer.description': 'HealthGuard AI - 通过AI驱动的位置服务和患者管理革命性医疗保健交付。',
      'footer.product': '产品',
      'footer.company': '公司',
      'footer.support': '支持',
      'footer.legal': '法律',
      'footer.copyright': '© 2024 HealthGuard AI. 保留所有权利。'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;