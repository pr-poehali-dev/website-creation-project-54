import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [text, setText] = useState('');

  const handleRedirect = () => {
    window.location.href = 'https://www.roblox.com/share?code=fcd0a30af5145f4694bdb1f0d9b7d927&type=Server';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
      <div className="text-center px-6 max-w-md w-full animate-fade-in">
        <div className="mb-8 animate-scale-in">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
            <Icon name="ArrowRight" size={48} className="text-primary" />
          </div>
          
          <p className="text-gray-600 text-lg">
            Вставьте ссылку и нажмите кнопку
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Введите текст"
            className="text-center"
          />
        </div>

        <Button
          onClick={handleRedirect}
          size="lg"
          className="w-full text-lg py-6 font-semibold transition-all hover:scale-105 hover:shadow-lg"
        >
          Перейти
          <Icon name="ExternalLink" size={20} className="ml-2" />
        </Button>

        <p className="text-sm text-gray-500 mt-6">
          Вы будете перенаправлены на целевую страницу
        </p>
      </div>
    </div>
  );
};

export default Index;