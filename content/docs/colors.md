+++
date = 2024-08-01
authors = ["Brasilis Club"]
title = "Paleta de Cores"
description = "Uma introdução ao básico de paleta de cores no copan"
[extra]
longDate = "01 de Agosto, 2024"
+++
Copan inclue uma paleta de cores padronizada, seguindo o padrão esperado em vários
navegadores modernos, garantindo uma experiência elegante e concisa.

Contudo, há sempre aqueles que preferem seguir uma paleta de cores própria. Para facilitar,
a seguir apresentamos todas as variáveis relacionadas a cores do Copan:
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

    --label-primary-default: #191919;
    --label-primary-hover: #4C4C4C;
    --label-primary-disabled: #7F7F7F;

    --label-secondary-default: #EFEFEF;
    --label-secondary-hover: #E3E3E3;
    --label-secondary-default: #DFDFDF;

    --label-accent-default: #0000EE;
    --label-accent-hover: #0000CC;
    --label-accent-disabled: #143E31;

    --background-primary: #FFFFFF;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --fill-primary-default: #F7F7F7;
    --fill-primary-hover: #EFEFEF;
    --fill-primary-disabled: #E0E0E0;

    --fill-accent-default: #0000EE;
    --fill-accent-hover: #0000CC;
    --fill-accent-disabled: #143E31;

    --label-primary-default: #191919;
    --label-primary-hover: #4C4C4C;
    --label-primary-disabled: #7F7F7F;

    --label-secondary-default: #EFEFEF;
    --label-secondary-hover: #E3E3E3;
    --label-secondary-default: #DFDFDF;

    --label-accent-default: #191919;
    --label-accent-hover: #4C4C4C;
    --label-accent-disabled: #7F7F7F;

    --background-primary: #FFFFFF;
  }
}
```

Nota-se que temos uma condicional, `prefers-color-scheme` é uma valor de mídia
disponibilizada pelo navegador a partir da preferência de esquema de cores padrão
do sistema operacional do usuário. Então, caso queira, pode oferecer uma opção tanto
para o modo claro, quanto para o modo escuro.
