import React, { useState } from 'react';
import { Layout, Button, Select, Dropdown, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { 
  MenuOutlined, 
  HeartOutlined, 
  GlobalOutlined, 
  CaretDownOutlined 
} from '@ant-design/icons';
import ContactModal from './ContactModal';

const { Header } = Layout;

const Navigation: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const languageMenu = (
    <Menu
      items={[
        {
          key: 'en',
          label: 'English',
          onClick: () => changeLanguage('en'),
        },
        {
          key: 'es',
          label: 'Español',
          onClick: () => changeLanguage('es'),
        },
        {
          key: 'zh',
          label: '中文',
          onClick: () => changeLanguage('zh'),
        },
      ]}
    />
  );

  const menuItems = (
    <>
      <Button 
        type="text" 
        className="text-slate-700 hover:text-green-600"
        onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
      >
        {t('nav.home')}
      </Button>
      <Button 
        type="text" 
        className="text-slate-700 hover:text-green-600"
        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
      >
        {t('nav.features')}
      </Button>
      <Button 
        type="text" 
        className="text-slate-700 hover:text-green-600"
        onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
      >
        {t('nav.demo')}
      </Button>
      <Button 
        type="text" 
        className="text-slate-700 hover:text-green-600"
        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
      >
        {t('nav.pricing')}
      </Button>
      <Button 
        type="primary" 
        className="bg-green-600 hover:bg-green-700 border-0"
        onClick={() => setIsContactModalOpen(true)}
      >
        {t('nav.contact') || 'Contact Us'}
      </Button>
    </>
  );

  return (
    <Header className="bg-white shadow-sm border-b border-slate-200 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <HeartOutlined className="text-2xl text-green-600" />
          <span className="text-xl font-bold text-slate-800">HealthGuard AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4">
          {menuItems}
        </div>

        {/* Language Selector and Mobile Menu */}
        <div className="flex items-center space-x-2">
          <Dropdown overlay={languageMenu} trigger={['click']}>
            <Button 
              type="text" 
              icon={<GlobalOutlined className="text-slate-600" />}
              className="text-slate-600"
            >
              <CaretDownOutlined />
            </Button>
          </Dropdown>
          
          {/* Mobile Menu Button */}
          <Button
            className="lg:hidden"
            type="text"
            icon={<MenuOutlined className="text-slate-700" />}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 py-4">
          <div className="flex flex-col space-y-2 px-4">
            {menuItems}
          </div>
        </div>
      )}

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Contact HealthGuard AI"
        reason="general"
      />
    </Header>
  );
};

export default Navigation;