+++
date = 2024-08-01
authors = ["Brasilis Club"]
title = "Paleta de Cores"
description = "Uma introdução ao básico de paleta de cores no copan"
[extra]
longDate = "01 de Agosto, 2024"
+++
O Copan inclui uma paleta de cores padronizada, projetada para garantir uma 
experiência elegante e consistente em diversos navegadores modernos. No entanto, 
para atender às preferências individuais, também fornecemos uma configuração 
flexível para personalização de cores.

A seguir, apresentamos todas as variáveis relacionadas a cores do Copan, 
adaptadas para diferentes esquemas de cores:
```scss
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: light;
    --fill-primary-default: #EFEFEF;
    --fill-primary-hover: #E3E3E3;
    --fill-primary-disabled: #DFDFDF;

    --fill-accent-default: #0000EE;
    --fill-accent-hover: #0000CC;
    --fill-accent-disabled: #143E31;

    --label-primary: #000;
    --label-secondary: #FFF;
    --label-accent: #0000EE;

    --background-primary: #FFF;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --fill-primary-default: #101010;
    --fill-primary-hover: #181818;
    --fill-primary-disabled: #3A3A3C;

    --fill-accent-default: #2E236C;
    --fill-accent-hover: #433D8B;
    --fill-accent-disabled: #C8ACD6;

    --label-primary: #FFF;
    --label-secondary: #000;
    --label-accent: #5049A6;

    --background-primary: #000;
  }
}
```

Observe que utilizamos a consulta de mídia prefers-color-scheme, uma 
funcionalidade disponível nos navegadores que adapta o esquema de cores 
com base na preferência do sistema operacional do usuário. Assim, você pode 
garantir que sua aplicação ofereça uma opção adequada tanto para o modo claro 
quanto para o modo escuro.
