import React, { useState } from 'react';
import { Row, Col, Card, Button, Typography, List } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  CheckOutlined, 
  StarOutlined,
  CrownOutlined,
  HeartOutlined
} from '@ant-design/icons';
import ContactModal from './ContactModal';
import PurchaseModal from './PurchaseModal';

const { Title, Text } = Typography;

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  color: string;
}

const Pricing: React.FC = () => {
  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handlePurchaseClick = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsPurchaseModalOpen(true);
  };

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModals = () => {
    setIsContactModalOpen(false);
    setIsPurchaseModalOpen(false);
    setSelectedPlan(null);
  };

  const plans: Plan[] = [
    {
      name: t('pricing.starter.name'),
      price: t('pricing.starter.price'),
      period: t('pricing.starter.period'),
      description: 'Perfect for small clinics and private practices',
      features: [
        'Up to 50 patients',
        'Basic RTLS tracking',
        'Simple scheduling',
        'HIPAA compliance',
        'Email support'
      ],
      popular: false,
      color: 'green'
    },
    {
      name: t('pricing.professional.name'),
      price: t('pricing.professional.price'),
      period: t('pricing.professional.period'),
      description: 'Ideal for mid-size hospitals and medical centers',
      features: [
        'Up to 500 patients',
        'Advanced RTLS system',
        'AI scheduling optimization',
        'Floor mapping',
        'Analytics dashboard',
        'Phone support'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: t('pricing.enterprise.name'),
      price: t('pricing.enterprise.price'),
      period: t('pricing.enterprise.period'),
      description: 'For large health systems and hospital networks',
      features: [
        'Unlimited patients',
        'Full RTLS deployment',
        'Custom AI models',
        'Multi-facility management',
        'EHR/LIS/PACS integration',
        '24/7 dedicated support'
      ],
      popular: false,
      color: 'orange'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const getCardStyle = (plan: any) => {
    if (plan.popular) {
      return {
        border: '2px solid #8b5cf6',
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(139, 92, 246, 0.1)',
        transform: 'scale(1.05)',
        position: 'relative' as const
      };
    }
    return {
      border: '1px solid #e2e8f0',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    };
  };

  const getButtonStyle = (plan: any) => {
    if (plan.popular) {
      return {
        background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
        border: 'none',
        borderRadius: '8px'
      };
    }
    return {
      border: '2px solid #059669',
      color: '#059669',
      borderRadius: '8px'
    };
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title level={2} className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t('pricing.title')}
          </Title>
          <Text className="text-lg text-slate-600 max-w-2xl mx-auto block">
            {t('pricing.subtitle')}
          </Text>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row gutter={[24, 24]} justify="center">
            {plans.map((plan, index) => (
              <Col xs={24} md={8} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    style={getCardStyle(plan)}
                    className="h-full"
                    bodyStyle={{ padding: '32px 24px' }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                          <CrownOutlined />
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <Title level={3} className="text-2xl font-bold text-slate-900 mb-2">
                        {plan.name}
                      </Title>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                        {plan.period && (
                          <span className="text-slate-600 ml-1">{plan.period}</span>
                        )}
                      </div>
                      <Text className="text-slate-600 block">
                        {plan.description}
                      </Text>
                    </div>

                    <List
                      className="mb-8"
                      dataSource={plan.features}
                      renderItem={(feature) => (
                        <List.Item className="border-0 py-2">
                          <div className="flex items-center gap-3">
                            <CheckOutlined className="text-green-500 text-sm" />
                            <Text className="text-slate-700">{feature}</Text>
                          </div>
                        </List.Item>
                      )}
                    />

                    <Button
                      type={plan.popular ? 'primary' : 'default'}
                      size="large"
                      className="w-full"
                      style={getButtonStyle(plan)}
                      onClick={() => handlePurchaseClick(plan)}
                    >
                      {t('pricing.cta')}
                    </Button>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Healthcare-Specific Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-0">
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} lg={16}>
                <Title level={4} className="text-slate-900 mb-2">
                  Need a healthcare-specific solution?
                </Title>
                <Text className="text-slate-600 block">
                  Contact our healthcare consultants to discuss custom implementations, 
                  regulatory compliance, and integration with your existing medical systems.
                </Text>
              </Col>
              <Col xs={24} lg={8}>
                <Button 
                  size="large" 
                  className="bg-green-600 hover:bg-green-700 text-white border-0"
                  icon={<HeartOutlined />}
                  onClick={handleContactClick}
                >
                  Contact Healthcare Sales
                </Button>
              </Col>
            </Row>
          </Card>
        </motion.div>

        {/* Healthcare Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckOutlined className="text-green-500" />
              <span>HIPAA compliant from day one</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckOutlined className="text-green-500" />
              <span>FDA 510(k) eligible</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckOutlined className="text-green-500" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckOutlined className="text-green-500" />
              <span>Free migration assistance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckOutlined className="text-green-500" />
              <span>24/7 medical support</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Modal */}
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={handleCloseModals}
          title="Contact Healthcare Sales"
          reason="enterprise"
        />

        {/* Purchase Modal */}
        <PurchaseModal
          isOpen={isPurchaseModalOpen}
          onClose={handleCloseModals}
          plan={selectedPlan}
        />
      </div>
    </section>
  );
};

export default Pricing;