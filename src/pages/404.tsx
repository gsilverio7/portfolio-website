import { Button, ShowLottie } from '../components';
import { Layout } from '../containers';

const Custom404 = () => {
  return (
    <Layout className="h-screen grid place-items-center">
      <div className="text-center w-full max-w-xl">
        <ShowLottie path="/lotties/404-green.json" className="mx-auto" />

        <p className="text-3xl md:text-4xl capitalize text-dark-2 mt-5">
          página não encontrada
        </p>

        <Button type="link" href="/" size="lg" className="mt-20" sameTab center>
          voltar para página inicial
        </Button>
      </div>
    </Layout>
  );
};

export default Custom404;
