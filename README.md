## Getting Started

To run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prisma

### Setup

[Add Prisma ORM to an existing PostgreSQL project](https://www.prisma.io/docs/getting-started/prisma-orm/add-to-existing-project/postgresql)

### Commands

Sync local schema with remote db

```bash
pnpm dlx prisma db pull
```

Sync remote with local

```bash
pnpm exec prisma db push
```

Create db migration (copy and past this into the terminal and run it)

```bash
$name = "init_expenses_and_categories"
$ts = Get-Date -Format "yyyyMMddHHmmss"
$dir = "prisma/migrations/$($ts)_$($name)"

New-Item -ItemType Directory -Path $dir -Force | Out-Null

pnpm dlx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script |
    Out-File -FilePath "$dir/migration.sql" -Encoding utf8
```

format your schema

```bash
pnpm exec prisma format
```

validate your schema

```bash
pnpm exec prisma validate
```

## [Roadmap](./docs/roadmap.md)

## Shadcn/ui

How to add more components

```bash
pnpm dlx shadcn@latest add button card input label table
```