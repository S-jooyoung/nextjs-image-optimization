import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '<img/> VS Next/image',
  description: ' <img/>와 Next/image 컴포넌트의 동작 비교',
};

export default function NextImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
