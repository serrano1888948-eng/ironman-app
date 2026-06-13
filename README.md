O Projeto

O Projeto Iron Man nasceu de uma decisão simples e absurda ao mesmo tempo: completar um IRONMAN 70.3 — 1,9km de natação, 90km de bike e 21,1km de corrida — saindo do zero no triathlon.

A ideia não é só cruzar a linha de chegada. É construir, ao longo de meses, uma versão mais completa de atleta e de pessoa. O triathlon exige equilíbrio entre três modalidades, consistência absurda e inteligência no planejamento. Não tem atalho. Tem processo.

Este repositório é o centro de controle desse processo.


O App

O Iron Man App é uma PWA (Progressive Web App) — funciona no celular como um aplicativo nativo, sem precisar instalar nada — criada para organizar, registrar e acompanhar toda a preparação.

A filosofia do app é clareza acima de tudo: saber o que treinar hoje, registrar o que foi feito e visualizar a evolução ao longo das semanas.

O que o app faz hoje


Grade semanal com destaque automático do dia atual
Treinos A, B, C e Core com exercícios, séries, reps e protocolo de falha
Volume por grupamento muscular — séries semanais por músculo
Registro de pesos — último peso e reps por exercício, com histórico
Tela de Evolução — gráfico de progressão por exercício



Fases do Projeto

Fase 1 — Base e Estrutura (atual)

Construção da base aeróbica, introdução à natação e manutenção da musculação. Plano de 30 semanas com foco em chegar ao 70.3 em condições reais de competir.


Musculação 3x/semana (Treinos A, B, C)
Natação 2x/semana
Corrida 3x/semana (Z2 + intensidade + long run)
Core diário (~10 min)


Fase 2 — Integração de Dados (em desenvolvimento)

Conexão do app com bancos de dados na nuvem para que os registros de treino fiquem disponíveis em qualquer dispositivo.

Fase 3 — Ecossistema Conectado (planejado)

A visão de longo prazo é transformar o app no hub central da preparação, integrando os principais aplicativos de treino:

PlataformaTipoStatusGarmin ConnectDados de corrida, bike e nataçãoPlanejadoStravaAtividades e segmentosPlanejadoRunnaPlano de corrida estruturadoPlanejadoTrainingPeaksCarga de treino e TSSPlanejadoWahoo / ZwiftDados de ciclismo indoorPlanejado

A ideia é simples: você não precisará abrir cinco apps diferentes. Tudo que importa — carga, volume, evolução, próximo treino — estará em um lugar só.


Stack


Frontend: HTML + CSS + JavaScript puro (sem frameworks)
PWA: Service Worker + Web App Manifest
Banco de dados: Firebase Firestore (em implementação)
Auth: Google Login (em implementação)
Hospedagem: GitHub Pages



Como usar


Acesse o app pelo link do GitHub Pages
Adicione à tela inicial do celular para experiência nativa
Na aba Treinos, veja o programa do dia
Registre o peso de cada exercício tocando em Registrar
Acompanhe a evolução na aba Evolução



Status

Fase 1 — App base                    ██████████ 100%
Fase 2 — Banco de dados online       ███░░░░░░░  30%
Fase 3 — Integrações externas        ░░░░░░░░░░   0%


Projeto pessoal em construção contínua.
Meta: linha de chegada do 70.3 — Janeiro 2027.
