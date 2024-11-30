# API do Brasileirão 
 2024

API REST para gerenciamento das estatísticas e informações do Brasileirão
 (Série A).

## Funcionalidades

- Gerenciamento completo de times (operações CRUD)
- Rastreamento de estatísticas em tempo real
- Validação de dados
- Cobertura para os 20 times da Série A

## Endpoints

### `GET /`
Retorna a tabela completa da liga com todos os times.

---

### `GET /:sigla`
Retorna dados de um time específico.

- **Parâmetro**: `sigla` (abreviação de 3 letras do time)
- **Exemplo**: `/PAL` retorna os dados do Palmeiras.

---

### `POST /`
Adiciona um novo time.

- **Campos obrigatórios**:
  - `nome` (mínimo de 4 caracteres)
  - `sigla` (3 letras)
  - Todas as estatísticas começam com o valor padrão de 0.

---

### `PUT /:sigla`
Atualiza as estatísticas de um time.

- **Parâmetro**: `sigla` (abreviação de 3 letras do time)
- **Campos atualizáveis**:
  - `pontos`
  - `vitórias`
  - `empates`
  - `derrotas`
  - `golsMarcados`
  - `golsSofridos`
  - `saldoGols`

---

### `DELETE /:sigla`
Remove um time da liga.

- **Parâmetro**: `sigla` (abreviação de 3 letras do time)

---

## Instalação

```bash
npm install
