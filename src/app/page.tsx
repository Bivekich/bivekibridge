import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Видеоконференции
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Современное приложение для проведения видеоконференций с
          использованием WebRTC и Socket.io. Создавайте комнаты, общайтесь в
          чате и проводите встречи с высоким качеством видео и звука.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/login">Войти</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/register">Зарегистрироваться</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
