import { Module, Lesson } from '../types';

export const modules: Module[] = [
  {
    id: 'module-1',
    title: 'Como Criar sua Conta e Abrir sua Loja',
    description: 'Primeiros passos para começar a vender na Shopee',
    color: 'from-purple-600 to-blue-600',
    lessons: [
      {
        id: 'lesson-1-1',
        title: 'Como criar conta Shopee',
        duration: '8:32',
        thumbnail: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=dyVm8PAvU04',
        description: 'Passo a passo para criar sua conta de vendedor na Shopee'
      },
      {
        id: 'lesson-1-2',
        title: 'Abrir loja Shopee tutorial',
        duration: '12:15',
        thumbnail: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=SSK4BKBJH8M',
        description: 'Tutorial completo para abrir sua primeira loja'
      },
      {
        id: 'lesson-1-3',
        title: 'Erros iniciais Shopee',
        duration: '9:47',
        thumbnail: 'https://images.pexels.com/photos/4348066/pexels-photo-4348066.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=QovG48aU5Rc',
        description: 'Evite os erros mais comuns de iniciantes'
      },
      {
        id: 'lesson-1-4',
        title: 'Nome e descrição da loja Shopee',
        duration: '6:23',
        thumbnail: 'https://images.pexels.com/photos/4348081/pexels-photo-4348081.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=efm2my_P4a4&t=3s',
        description: 'Como escolher o nome perfeito para sua loja'
      },
      {
        id: 'lesson-1-5',
        title: 'Configuração profissional Shopee',
        duration: '11:08',
        thumbnail: 'https://images.pexels.com/photos/4348092/pexels-photo-4348092.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=TSeo5xYjBPA',
        description: 'Dicas para tornar sua loja mais profissional'
      }
    ]
  },
  {
    id: 'module-2',
    title: 'Configurar sua Loja de Forma Profissional',
    description: 'Transforme sua loja em uma vitrine atrativa',
    color: 'from-blue-600 to-cyan-500',
    lessons: [
      {
        id: 'lesson-2-1',
        title: 'Identidade visual Shopee loja',
        duration: '15:42',
        thumbnail: 'https://images.pexels.com/photos/4348035/pexels-photo-4348035.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=BVg-E_Hvg5Q&t=16s',
        description: 'Como criar uma identidade visual marcante'
      },
      {
        id: 'lesson-2-2',
        title: 'Banner Shopee tutorial',
        duration: '13:27',
        thumbnail: 'https://images.pexels.com/photos/4348047/pexels-photo-4348047.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=iUQrg2NZTdQ',
        description: 'Criando banners que convertem visitantes em clientes'
      },
      {
        id: 'lesson-2-3',
        title: 'Política de entrega Shopee',
        duration: '10:55',
        thumbnail: 'https://images.pexels.com/photos/4348050/pexels-photo-4348050.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=qZjS8bl1Qik',
        description: 'Como definir políticas claras de entrega'
      },
      {
        id: 'lesson-2-4',
        title: 'Horário atendimento loja',
        duration: '8:18',
        thumbnail: 'https://images.pexels.com/photos/4348052/pexels-photo-4348052.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=9wDxPbzYmRs',
        description: 'Organizando horários de atendimento eficientes'
      },
      {
        id: 'lesson-2-5',
        title: 'Passar confiança Shopee',
        duration: '7:33',
        thumbnail: 'https://images.pexels.com/photos/4348061/pexels-photo-4348061.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=jTFvUqFJXl0',
        description: 'Estratégias para transmitir confiança aos clientes'
      }
    ]
  },
  {
    id: 'module-3',
    title: 'Cadastrando Produtos do Jeito Certo',
    description: 'Domine a arte de cadastrar produtos irresistíveis',
    color: 'from-cyan-500 to-pink-500',
    lessons: [
      {
        id: 'lesson-3-1',
        title: 'Fotos produtos artesanais celular',
        duration: '18:25',
        thumbnail: 'https://images.pexels.com/photos/4348063/pexels-photo-4348063.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=DeZ3LbR8zl4',
        description: 'Técnicas profissionais de fotografia com smartphone'
      },
      {
        id: 'lesson-3-2',
        title: 'Títulos que vendem Shopee',
        duration: '12:37',
        thumbnail: 'https://images.pexels.com/photos/4348065/pexels-photo-4348065.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=qNPbTCjmA94',
        description: 'Como escrever títulos que convertem em vendas'
      },
      {
        id: 'lesson-3-3',
        title: 'Como cadastrar produto Shopee',
        duration: '14:19',
        thumbnail: 'https://images.pexels.com/photos/4348067/pexels-photo-4348067.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=u9OM5JibBXI',
        description: 'Passo a passo completo do cadastro de produtos'
      },
      {
        id: 'lesson-3-4',
        title: 'SEO título Shopee',
        duration: '16:52',
        thumbnail: 'https://images.pexels.com/photos/4348070/pexels-photo-4348070.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=XgAj3tS7AtM',
        description: 'Otimização para aparecer nas buscas'
      },
      {
        id: 'lesson-3-5',
        title: 'Evitar rejeição produto Shopee',
        duration: '11:44',
        thumbnail: 'https://images.pexels.com/photos/4348073/pexels-photo-4348073.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=80uNY6lfcD4',
        description: 'Regras e diretrizes para aprovação de produtos'
      }
    ]
  },
  {
    id: 'module-4',
    title: 'Definindo o Frete Ideal',
    description: 'Estratégias de frete que aumentam suas vendas',
    color: 'from-pink-500 to-orange-500',
    lessons: [
      {
        id: 'lesson-4-1',
        title: 'Calcular frete Shopee',
        duration: '13:45',
        thumbnail: 'https://images.pexels.com/photos/4348075/pexels-photo-4348075.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=0IdtWHIv3_c',
        description: 'Como calcular o frete ideal para seus produtos'
      },
      {
        id: 'lesson-4-2',
        title: 'Frete grátis vale a pena Shopee',
        duration: '9:28',
        thumbnail: 'https://images.pexels.com/photos/4348077/pexels-photo-4348077.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=Q5YPtwHP3SY',
        description: 'Quando oferecer frete grátis é vantajoso'
      },
      {
        id: 'lesson-4-3',
        title: 'Peso e dimensão Shopee',
        duration: '11:15',
        thumbnail: 'https://images.pexels.com/photos/4348079/pexels-photo-4348079.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=78jV7Jm1diM',
        description: 'Como medir e cadastrar dimensões corretamente'
      },
      {
        id: 'lesson-4-4',
        title: 'Embalagem barata artesanal',
        duration: '15:33',
        thumbnail: 'https://images.pexels.com/photos/4348083/pexels-photo-4348083.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=CZflwOvGiGM',
        description: 'Embalagens econômicas e atrativas'
      },
      {
        id: 'lesson-4-5',
        title: 'Frete estratégia vendas artesanato',
        duration: '12:22',
        thumbnail: 'https://images.pexels.com/photos/4348085/pexels-photo-4348085.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=YtJ4TYoIgUU',
        description: 'Usando o frete como estratégia de vendas'
      }
    ]
  },
  {
    id: 'module-5',
    title: 'Precificação Inteligente',
    description: 'Aprenda a precificar para ter lucro garantido',
    color: 'from-orange-500 to-red-500',
    lessons: [
      {
        id: 'lesson-5-1',
        title: 'Calcular custo produto artesanal',
        duration: '16:18',
        thumbnail: 'https://images.pexels.com/photos/4348087/pexels-photo-4348087.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=S4eZnS-GDKQ',
        description: 'Como calcular todos os custos do seu produto'
      },
      {
        id: 'lesson-5-2',
        title: 'Como precificar artesanato',
        duration: '14:55',
        thumbnail: 'https://images.pexels.com/photos/4348089/pexels-photo-4348089.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=-Ygj_wcnULo',
        description: 'Métodos eficazes de precificação'
      },
      {
        id: 'lesson-5-3',
        title: 'Planilha precificação artesanal',
        duration: '19:42',
        thumbnail: 'https://images.pexels.com/photos/4348091/pexels-photo-4348091.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=_2y4mmBKY3w',
        description: 'Usando planilhas para controle de preços'
      },
      {
        id: 'lesson-5-4',
        title: 'Preço psicológico Shopee',
        duration: '10:37',
        thumbnail: 'https://images.pexels.com/photos/4348093/pexels-photo-4348093.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=k6lRezSDvsk',
        description: 'Técnicas de precificação psicológica'
      },
      {
        id: 'lesson-5-5',
        title: 'Evitar prejuízo artesanato',
        duration: '13:29',
        thumbnail: 'https://images.pexels.com/photos/4348095/pexels-photo-4348095.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=UVZBykgUDBE',
        description: 'Como garantir lucro em todas as vendas'
      }
    ]
  },
  {
    id: 'module-6',
    title: 'Usando Anúncios Pagos (Shopee Ads)',
    description: 'Domine os anúncios para vender mais',
    color: 'from-red-500 to-purple-600',
    lessons: [
      {
        id: 'lesson-6-1',
        title: 'Shopee Ads tutorial',
        duration: '22:15',
        thumbnail: 'https://images.pexels.com/photos/4348097/pexels-photo-4348097.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/embed/2ZSg9RBmC8o',
        description: 'Tutorial completo do Shopee Ads'
      },
      {
        id: 'lesson-6-2',
        title: 'Investir em anúncios Shopee',
        duration: '17:33',
        thumbnail: 'https://images.pexels.com/photos/4348099/pexels-photo-4348099.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=hEjiJU9IjQg',
        description: 'Quanto e como investir em anúncios'
      },
      {
        id: 'lesson-6-3',
        title: 'Anúncios artesanato Shopee',
        duration: '15:48',
        thumbnail: 'https://images.pexels.com/photos/4348101/pexels-photo-4348101.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=UpSDuC38WsI',
        description: 'Estratégias específicas para artesanato'
      },
      {
        id: 'lesson-6-4',
        title: 'Aparecer no topo Shopee',
        duration: '18:22',
        thumbnail: 'https://images.pexels.com/photos/4348103/pexels-photo-4348103.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=SNb0it15LOM',
        description: 'Como ranquear melhor nos resultados'
      },
      {
        id: 'lesson-6-5',
        title: 'Segmentação Shopee Ads',
        duration: '14:17',
        thumbnail: 'https://images.pexels.com/photos/4348105/pexels-photo-4348105.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=0M8efJmerxQ',
        description: 'Como segmentar seu público-alvo'
      }
    ]
  },
  {
    id: 'module-7',
    title: 'Loja Pronta, Vendendo e com Lucro',
    description: 'Estratégias avançadas para maximizar resultados',
    color: 'from-purple-600 to-pink-500',
    lessons: [
      {
        id: 'lesson-7-1',
        title: 'Atendimento ao cliente Shopee',
        duration: '16:45',
        thumbnail: 'https://images.pexels.com/photos/4348107/pexels-photo-4348107.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=3XrZ_diQkRA',
        description: 'Como oferecer atendimento de excelência'
      },
      {
        id: 'lesson-7-2',
        title: 'Lidar com reclamações',
        duration: '12:58',
        thumbnail: 'https://images.pexels.com/photos/4348109/pexels-photo-4348109.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=-MwB16lgeh8',
        description: 'Transformando reclamações em oportunidades'
      },
      {
        id: 'lesson-7-3',
        title: 'Estratégia pós-venda Shopee',
        duration: '14:33',
        thumbnail: 'https://images.pexels.com/photos/4348111/pexels-photo-4348111.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=mbbx3IsMdB4&t=68s',
        description: 'Pós-venda que gera mais vendas'
      },
      {
        id: 'lesson-7-4',
        title: 'Kits artesanato vendas',
        duration: '18:27',
        thumbnail: 'https://images.pexels.com/photos/4348113/pexels-photo-4348113.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=Yezh_r8y7M4',
        description: 'Como criar kits que aumentam o ticket médio'
      },
      {
        id: 'lesson-7-5',
        title: 'Fidelizar cliente Shopee',
        duration: '13:52',
        thumbnail: 'https://images.pexels.com/photos/4348115/pexels-photo-4348115.jpeg?auto=compress&cs=tinysrgb&w=800',
        videoUrl: 'https://www.youtube.com/watch?v=5sLgNCeUNuI',
        description: 'Estratégias para criar clientes fiéis'
      }
    ]
  }
];

export const extraContent: Lesson[] = [
  {
    id: 'extra-1',
    title: 'Kits e pacotes artesanais',
    duration: '13:45',
    thumbnail: 'https://images.pexels.com/photos/4348117/pexels-photo-4348117.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://www.youtube.com/watch?v=gCmbtrQTQM0',
    description: 'Como criar kits irresistíveis que aumentam suas vendas'
  },
  {
    id: 'extra-2',
    title: 'Atendimento via WhatsApp',
    duration: '9:28',
    thumbnail: 'https://images.pexels.com/photos/4348119/pexels-photo-4348119.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://www.youtube.com/watch?v=DKjIrl4K1Pk',
    description: 'Estratégias de atendimento pelo WhatsApp'
  },
  {
    id: 'extra-3',
    title: 'Embalagens criativas',
    duration: '11:15',
    thumbnail: 'https://images.pexels.com/photos/4348121/pexels-photo-4348121.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://www.youtube.com/watch?v=MH-KOkWOo5s',
    description: 'Embalagens que encantam e fidelizam clientes'
  },
  {
    id: 'extra-4',
    title: 'Utilizar avaliações',
    duration: '15:33',
    thumbnail: 'https://images.pexels.com/photos/4348123/pexels-photo-4348123.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: '',
    description: 'Como usar avaliações para aumentar vendas'
  }
];