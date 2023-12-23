import { useTranslation } from 'next-i18next';
import Image from 'next/legacy/image';

export default function Footer() {
  const { t } = useTranslation(`common`);

  return (
    <footer className="flex flex-col items-center pb-4">
      <Image src="/icon/line.svg" width="125" height="54" />
     
      </div>
      <div className="text-gray-500 mt-3 px-6 text-center">
        <a
          href="https://abstractlab.gumroad.com/l/noto-avatar"
          className="hover:underline"
        >
          &copy;{` ${t(`illustrations`)}`}
        </a>
        {t(`designedBy`)}
        <a href="https://twitter.com/felix12777" className="hover:underline">
          {` Felix Wong `}
        </a>
        {t(`underDesign`)}
        <a
          className="hover:underline"
          href="https://creativecommons.org/publicdomain/zero/1.0/"
        >
          {` CC0 `}
        </a>
        {t(`license`)}
      </div>
    </footer>
  );
}
