'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Sun, Cloud, CloudRain, CloudSnow, Wind, Thermometer, Eye, Droplets } from 'lucide-react';

interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  icon: string;
  forecast: {
    date: string;
    temp: number;
    icon: string;
  }[];
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Simulation de données météo pour Hammamet (en production, utiliser OpenWeatherMap API)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockWeather: WeatherData = {
          temperature: 22,
          description: 'Ensoleillé',
          humidity: 65,
          windSpeed: 12,
          visibility: 10,
          icon: 'sun',
          forecast: [
            { date: 'Aujourd\'hui', temp: 22, icon: 'sun' },
            { date: 'Demain', temp: 24, icon: 'sun' },
            { date: 'Mercredi', temp: 21, icon: 'cloud' },
            { date: 'Jeudi', temp: 23, icon: 'sun' },
            { date: 'Vendredi', temp: 25, icon: 'sun' }
          ]
        };
        
        setWeather(mockWeather);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (iconType: string, size: number = 24) => {
    const iconProps = { size, className: "text-orange-500" };
    
    switch (iconType) {
      case 'sun':
        return <Sun {...iconProps} />;
      case 'cloud':
        return <Cloud {...iconProps} />;
      case 'rain':
        return <CloudRain {...iconProps} />;
      case 'snow':
        return <CloudSnow {...iconProps} />;
      default:
        return <Sun {...iconProps} />;
    }
  };

  if (loading) {
    return (
      <Card className="p-4 bg-gradient-to-br from-blue-50 to-orange-50 border-blue-200">
        <div className="animate-pulse">
          <div className="h-4 bg-blue-200 rounded w-3/4 mb-2"></div>
          <div className="h-8 bg-blue-200 rounded w-1/2"></div>
        </div>
      </Card>
    );
  }

  if (error || !weather) {
    return (
      <Card className="p-4 bg-gradient-to-br from-blue-50 to-orange-50 border-blue-200">
        <div className="text-center text-blue-600">
          <Sun className="w-6 h-6 mx-auto mb-1" />
          <div className="text-sm font-medium">Hammamet</div>
          <div className="text-xs text-blue-500">Climat méditerranéen</div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4 bg-gradient-to-br from-blue-50 via-white to-orange-50 border-blue-200 hover:shadow-lg transition-all duration-300">
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-blue-800">Actuellement à</div>
            <div className="text-lg font-bold text-blue-900">Hammamet</div>
          </div>
          {getWeatherIcon(weather.icon, 32)}
        </div>

        {/* Temperature */}
        <div className="flex items-center space-x-2">
          <div className="text-3xl font-bold text-orange-600">{weather.temperature}°</div>
          <div className="text-blue-700 font-medium">{weather.description}</div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-3 gap-2 text-xs text-blue-600">
          <div className="flex items-center space-x-1">
            <Droplets className="w-3 h-3" />
            <span>{weather.humidity}%</span>
          </div>
          <div className="flex items-center space-x-1">
            <Wind className="w-3 h-3" />
            <span>{weather.windSpeed}km/h</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="w-3 h-3" />
            <span>{weather.visibility}km</span>
          </div>
        </div>

        {/* Forecast */}
        <div className="border-t border-blue-100 pt-2">
          <div className="flex justify-between items-center">
            {weather.forecast.slice(0, 4).map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-blue-600 mb-1">{day.date.slice(0, 3)}</div>
                {getWeatherIcon(day.icon, 16)}
                <div className="text-xs font-medium text-blue-800 mt-1">{day.temp}°</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-1">
          <div className="text-xs text-blue-500 italic">
            ☀️ 300 jours de soleil par an
          </div>
        </div>
      </div>
    </Card>
  );
}