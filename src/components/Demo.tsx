import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Typography, Statistic, Progress, List, Badge } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  EnvironmentOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  LineChartOutlined,
  TeamOutlined,
  SafetyOutlined,
  MedicineBoxOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

interface DemoProps {
  currentDemo: string;
  setCurrentDemo: (demo: string) => void;
}

const Demo: React.FC<DemoProps> = ({ currentDemo, setCurrentDemo }) => {
  const { t } = useTranslation();
  const [activePatients, setActivePatients] = useState(247);
  const [bedOccupancy, setBedOccupancy] = useState(23);
  const [waitTime, setWaitTime] = useState(8.2);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePatients(prev => prev + (Math.random() > 0.7 ? 1 : 0) - (Math.random() > 0.8 ? 1 : 0));
      setBedOccupancy(prev => {
        const change = (Math.random() > 0.6 ? 1 : 0) - (Math.random() > 0.7 ? 1 : 0);
        return Math.max(15, Math.min(30, prev + change));
      });
      setWaitTime(prev => {
        const change = (Math.random() - 0.5) * 0.5;
        return Math.max(3, Math.min(15, prev + change));
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const demoTabs = [
    { key: 'rtls', icon: <EnvironmentOutlined />, title: t('demo.rtls.title'), subtitle: t('demo.rtls.subtitle') },
    { key: 'scheduling', icon: <CalendarOutlined />, title: t('demo.scheduling.title'), subtitle: t('demo.scheduling.subtitle') },
    { key: 'mapping', icon: <AppstoreOutlined />, title: t('demo.mapping.title'), subtitle: t('demo.mapping.subtitle') },
    { key: 'analytics', icon: <LineChartOutlined />, title: t('demo.analytics.title'), subtitle: t('demo.analytics.subtitle') }
  ];

  const rtlsData = [
    { id: 1, patient: 'John Smith', location: 'Room 2A-15', status: 'Active', lastSeen: '2 min ago' },
    { id: 2, patient: 'Mary Johnson', location: 'ER Bay 3', status: 'Treatment', lastSeen: '1 min ago' },
    { id: 3, patient: 'David Brown', location: 'Floor 3, Ward 2', status: 'Discharge', lastSeen: '5 min ago' },
    { id: 4, patient: 'Sarah Wilson', location: 'Surgery Suite 1', status: 'Surgery', lastSeen: '30 sec ago' }
  ];

  const schedulingData = [
    { time: '09:00', patient: 'Emma Davis', doctor: 'Dr. Anderson', type: 'Consultation', status: 'Upcoming' },
    { time: '09:30', patient: 'Michael Chen', doctor: 'Dr. Williams', type: 'Follow-up', status: 'In Progress' },
    { time: '10:00', patient: 'Lisa Garcia', doctor: 'Dr. Taylor', type: 'Surgery', status: 'Scheduled' },
    { time: '10:30', patient: 'Robert Lee', doctor: 'Dr. Brown', type: 'Consultation', status: 'Completed' }
  ];

  const mappingData = [
    { floor: 'Floor 1', patients: 45, occupancy: 75, critical: 2 },
    { floor: 'Floor 2', patients: 67, occupancy: 83, critical: 1 },
    { floor: 'Floor 3', patients: 38, occupancy: 65, critical: 0 },
    { floor: 'ER', patients: 12, occupancy: 40, critical: 3 }
  ];

  const analyticsData = [
    { metric: 'Patient Satisfaction', value: 94.5, change: '+2.3%' },
    { metric: 'Average Wait Time', value: 8.2, change: '-15%' },
    { metric: 'Bed Utilization', value: 78.2, change: '+5.1%' },
    { metric: 'Staff Efficiency', value: 89.7, change: '+8.2%' }
  ];

  const renderRTLSDemo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TeamOutlined className="text-green-600" />
            <Text className="font-medium">Active Patients</Text>
          </div>
          <div className="text-2xl font-bold text-green-600">{activePatients}</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <MedicineBoxOutlined className="text-blue-600" />
            <Text className="font-medium">Bed Occupancy</Text>
          </div>
          <div className="text-2xl font-bold text-blue-600">{bedOccupancy}/30</div>
        </div>
      </div>
      
      <Card title="Real-Time Patient Tracking" className="border-0 shadow-sm">
        <List
          dataSource={rtlsData}
          renderItem={(item) => (
            <List.Item>
              <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                  <Text className="font-medium">{item.patient}</Text>
                  <Badge 
                    status={item.status === 'Active' ? 'processing' : item.status === 'Treatment' ? 'warning' : 'success'} 
                    text={item.status}
                  />
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>{item.location}</span>
                  <span>{item.lastSeen}</span>
                </div>
              </div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );

  const renderSchedulingDemo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">24</div>
          <div className="text-sm text-slate-600">Today's Appointments</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{waitTime.toFixed(1)}</div>
          <div className="text-sm text-slate-600">Avg Wait Time (min)</div>
        </div>
      </div>

      <Card title="AI-Optimized Schedule" className="border-0 shadow-sm">
        <List
          dataSource={schedulingData}
          renderItem={(item) => (
            <List.Item>
              <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <Text className="font-medium">{item.time} - {item.patient}</Text>
                    <div className="text-sm text-slate-500">{item.doctor} • {item.type}</div>
                  </div>
                  <Badge 
                    status={item.status === 'Upcoming' ? 'processing' : item.status === 'In Progress' ? 'warning' : 'success'} 
                    text={item.status}
                  />
                </div>
              </div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );

  const renderMappingDemo = () => (
    <div className="space-y-6">
      <div className="text-center p-4 bg-purple-50 rounded-lg">
        <div className="text-2xl font-bold text-purple-600">4</div>
        <div className="text-sm text-slate-600">Hospital Floors</div>
      </div>

      <Card title="Hospital Floor Status" className="border-0 shadow-sm">
        <div className="space-y-4">
          {mappingData.map((floor, index) => (
            <div key={index} className="p-4 border border-slate-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <Text className="font-medium">{floor.floor}</Text>
                <div className="text-sm text-slate-500">
                  {floor.patients} patients • {floor.occupancy}% occupancy
                </div>
              </div>
              <div className="flex justify-between items-center mb-1">
                <Progress percent={floor.occupancy} size="small" showInfo={false} />
                {floor.critical > 0 && (
                  <Badge count={floor.critical} style={{ backgroundColor: '#f56565' }} />
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderAnalyticsDemo = () => (
    <div className="space-y-6">
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">94.5%</div>
            <div className="text-sm text-slate-600">Patient Satisfaction</div>
          </div>
        </Col>
        <Col span={12}>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">8.2min</div>
            <div className="text-sm text-slate-600">Avg Wait Time</div>
          </div>
        </Col>
      </Row>

      <Card title="Key Performance Indicators" className="border-0 shadow-sm">
        <div className="space-y-4">
          {analyticsData.map((metric, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
              <div>
                <Text className="font-medium">{metric.metric}</Text>
                <div className="text-2xl font-bold text-slate-900 mt-1">{metric.value}{typeof metric.value === 'number' && metric.metric.includes('Time') ? 'min' : '%'}</div>
              </div>
              <div className="text-right">
                <Text className="text-green-600 font-medium">{metric.change}</Text>
                <div className="text-xs text-slate-500">vs last month</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderCurrentDemo = () => {
    switch (currentDemo) {
      case 'rtls': return renderRTLSDemo();
      case 'scheduling': return renderSchedulingDemo();
      case 'mapping': return renderMappingDemo();
      case 'analytics': return renderAnalyticsDemo();
      default: return renderRTLSDemo();
    }
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title level={2} className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t('demo.title')}
          </Title>
          <Text className="text-lg text-slate-600 max-w-2xl mx-auto block">
            {t('demo.subtitle')}
          </Text>
        </motion.div>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card title="Healthcare Modules" className="border-0 shadow-lg">
                <div className="space-y-2">
                  {demoTabs.map((tab) => (
                    <Button
                      key={tab.key}
                      type={currentDemo === tab.key ? 'primary' : 'default'}
                      className={`w-full justify-start text-left h-auto p-3 ${
                        currentDemo === tab.key ? 'bg-green-600 border-0' : 'border-slate-200'
                      }`}
                      onClick={() => setCurrentDemo(tab.key)}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {tab.icon}
                          <Text className="font-medium text-white">
                            {tab.title}
                          </Text>
                        </div>
                        <Text className="text-xs text-slate-300">
                          {tab.subtitle}
                        </Text>
                      </div>
                    </Button>
                  ))}
                </div>

                <div className="mt-6 p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <SafetyOutlined className="text-green-500" />
                    <Text className="text-sm text-green-700 font-medium">Live Data</Text>
                  </div>
                  <Text className="text-xs text-green-600">HIPAA compliant streaming</Text>
                </div>
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} lg={18}>
            <motion.div
              key={currentDemo}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-lg min-h-[500px]">
                {renderCurrentDemo()}
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Demo;