import React from 'react'
import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1>Bem-vindo ao Classificars</h1>
        <p>Seu Portal Completo para Compra, Venda e Informação Automotiva!</p>
    </header>
    
    <main>
        <section id="classificados">
            <h2>Classificados de Carros</h2>
            <p>Nossa plataforma de classificados é simples e intuitiva, projetada para facilitar sua busca. Aqui, você encontra uma ampla variedade de veículos, desde carros populares até modelos de luxo, novos e seminovos. Utilize nossos filtros de pesquisa para encontrar exatamente o que deseja, com detalhes como preço, ano, quilometragem e muito mais. E se você quer vender, nosso sistema permite que você anuncie seu carro de maneira rápida e eficaz, alcançando milhares de potenciais compradores.</p>
        </section>
        
        <section id="noticias">
            <h2>Portal de Notícias</h2>
            <p>Além dos classificados, oferecemos um portal de notícias completo para mantê-lo atualizado com tudo que acontece no mundo automotivo. Desde lançamentos e reviews de veículos até dicas de manutenção e notícias sobre o mercado, nosso conteúdo é criado por especialistas que entendem e amam carros tanto quanto você.</p>
        </section>
        
        <section id="porque-escolher">
            <h2>Por que Escolher o Classificars?</h2>
            <ul>
                <li><strong>Facilidade de Uso:</strong> Navegação intuitiva e filtros avançados para uma busca rápida e precisa.</li>
                <li><strong>Variedade de Opções:</strong> Encontre desde veículos econômicos até os mais luxuosos.</li>
                <li><strong>Segurança:</strong> Plataforma segura para compra e venda, garantindo tranquilidade em todas as transações.</li>
                <li><strong>Informação de Qualidade:</strong> Notícias atualizadas e análises detalhadas para mantê-lo bem informado.</li>
            </ul>
        </section>
        
        <section id="call-to-action">
            <h2>Comece Agora!</h2>
            <p>Explore nossos classificados, leia as últimas notícias e faça parte da comunidade Classificars. Seu próximo carro está a um clique de distância!</p>
        </section>
    </main>
    </div>
  )
}

export default About