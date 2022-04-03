# Gitflow

## Autor da FAQ

👉 <a href="https://www.linkedin.com/in/venzel">Edivam Enéas de Almeida Júnior</a><br />

> O Gitflow Worflow é um fluxo de trabalho do Git que auxilia o desenvolvimento contínuo de software entre a equipe envolvida.<br /><br />👉 <a href="https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow">Mais informações</a>

\* Se faz necessários os conhecimentos básicos sobre git.

## Como funciona nosso fluxo

Cada projeto e suas equipes podem optar por um determinado fluxo, abaixo é demonstrado o método que adotamos e as responsabilidade para cada membro da equipe.

![GitFlow](./media/images/gitflow-v1.png)

## Branchs

-   **user** - Eviará commits apenas para o próprio user, exemplo: tiago-feature-21.
-   **develop** - Receberá os merges dos users. (Ambiente de QA)
-   **master** - Receberá o merge da develop, final de uma release. (Ambiente de produção)

### Diretrizes

\* A branch **master** é bloqueada para receber commits e pull requests dos usuários. (recurso apenas no plano git pro), caso não possua o git pro, fica estabelecido, a proibição o envio de commits e pull requests do user para master.

\* A branch **master** representa o software em **produção**.

\* A branch **develop** representa o software em **QA**.

\* Fica determinado que sempre que um pull request na branch develop for aprovado ou reprovado, a branch do usuário NÃO será deletada, a fim de manter o git organizado.

### Etapas básicas no processo de interação no git

1 - Clona o repositório

```bash
git clone https://github.com/venzel/mypoint.git
```

2 - Criar uma branch com seu nome a partir da branch develop

```bash
# Tiago é um nome fictício, modifique para seu nome
git checkout -b tiago-new-feature origin/develop
```

3 - Todos os dias antes de iniciar as atividades de desenvolvimento e alteração de código, sempre fazer um pull da branch develop, para sincronizar tudo o que foi enviado para branch develop.

```bash
# Importante, estando na branch tiago
git pull origin develop
```

4 - Para enviar um commit para sua branch

```bash
# Tiago é um nome fictício, modifique para seu nome
git push origin tiago
```

5 - Para criar uma branch a partir da develop

```bash
git checkout -b tiago-new-feature
```

6 - Após a conclusão de um bloco de desenvolvimento, solicitar um push request para a nova branch

```bash
git push origin tiago-new-feature
```
