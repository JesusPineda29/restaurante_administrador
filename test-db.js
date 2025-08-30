const { PrismaClient } = require('./generated/prisma')

const prisma = new PrismaClient()

async function testCategories() {
  try {
    const categories = await prisma.category.findMany()
    console.log('Categorías en la base de datos:')
    console.log(categories)
    
    const count = await prisma.category.count()
    console.log(`Total de categorías: ${count}`)
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testCategories()

