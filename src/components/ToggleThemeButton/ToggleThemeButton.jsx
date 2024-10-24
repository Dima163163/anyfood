'use client';
import { useTheme } from '../../context/themeContext/useTheme';
import Button from '../Button/Button';

export const ToggleThemeButton = () => {
  const { toggleTheme } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      text='Toggle theme'
      styleViewVariant='border'
      colorViewVariant='darkBtn'
    />
  );
};
