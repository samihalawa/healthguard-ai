import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  EnvironmentOutlined, 
  CalendarOutlined, 
  AppstoreOutlined, 
  BranchesOutlined,
  LineChartOutlined,
  ApiOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <EnvironmentOutlined className="text-2xl text-green-600" />,
      title: t('feature.rtls.title'),
      description: t('feature.rtls.desc'),
      color: 'green'
    },
    {
      icon: <CalendarOutlined className="text-2xl text-blue-600" />,
      title: t('feature.scheduling.title'),
      description: t('feature.scheduling.desc'),
      color: 'blue'
    },
    {
      icon: <AppstoreOutlined className="text-2xl text-purple-600" />,
      title: t('feature.mapping.title'),
      description: t('feature.mapping.desc'),
      color: 'purple'
    },
    {
      icon: <BranchesOutlined className="text-2xl text-orange-600" />,
      title: t('feature.tracking.title'),
      description: t('feature.tracking.desc'),
      color: 'orange'
    },
    {
      icon: <LineChartOutlined className="text-2xl text-indigo-600" />,
      title: t('feature.analytics.title'),
      description: t('feature.analytics.desc'),
      color: 'indigo'
    },
    {
      icon: <ApiOutlined className="text-2xl text-cyan-600" />,
      title: t('feature.integration.title'),
      description: t('feature.integration.desc'),
      color: 'cyan'
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

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title level={2} className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t('features.title')}
          </Title>
          <Text className="text-lg text-slate-600 max-w-2xl mx-auto block">
            {t('features.subtitle')}
          </Text>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row gutter={[24, 24]}>
            {features.map((feature, index) => (
              <Col xs={24} md={12} lg={8} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    className="h-full border-2 border-slate-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg"
                    bodyStyle={{ padding: '32px 24px' }}
                  >
                    <div className="text-center">
                      <div className="mb-4">
                        {feature.icon}
                      </div>
                      <Title level={4} className="text-xl font-semibold text-slate-900 mb-3">
                        {feature.title}
                      </Title>
                      <Text className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </Text>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Compliance and Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12"
        >
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} lg={12}>
              <Title level={3} className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Healthcare Compliance & Security
              </Title>
              <Text className="text-lg text-slate-600 block mb-6">
                Built specifically for healthcare environments with industry-leading security, 
                compliance, and data protection standards. Your patient data is always secure and compliant.
              </Text>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <Text className="text-slate-700">HIPAA compliant architecture</Text>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <Text className="text-slate-700">End-to-end encryption</Text>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <Text className="text-slate-700">SOC 2 Type II certified</Text>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <Text className="text-slate-700">FDA 510(k) eligible</Text>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Title level={4} className="text-slate-900 mb-4">Security Compliance</Title>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Text className="text-slate-600">HIPAA Compliance</Text>
                    <Text className="font-semibold text-green-600">100%</Text>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Text className="text-slate-600">Security Score</Text>
                    <Text className="font-semibold text-blue-600">A+</Text>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Text className="text-slate-600">Uptime SLA</Text>
                    <Text className="font-semibold text-purple-600">99.9%</Text>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '99.9%' }}></div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;