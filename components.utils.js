const fs = require('fs')
const path = require('path')

const templateFunctions = {
  general: function () {
    createComponent('general')
  },
  form: function () {
    createComponent('forms')
  },
  input: function () {
    createComponent('formsInputs')
  },
}

let templateType = templateFunctions[process.argv[2]?.replace('--', '')]
if (templateType) templateType()
else console.error(new Error('Componente inválido.'))


// General Functions
function findFolder(rootFolder = './src', folderName) {
  const files = fs.readdirSync(rootFolder)

  for (const file of files) {
    const filePath = path.join(rootFolder, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory() && file === folderName) {
      return filePath
    } else if (stat.isDirectory()) {
      const foundFolder = findFolder(filePath, folderName)
      if (foundFolder) {
        return foundFolder
      }
    }
  }

  return null
}

function createComponent(type) {
  let moduleName = process.argv[3]
  let moduleMainFolder = findFolder('./src', type)
  let moduleFolder = `./${moduleMainFolder}/${moduleName}`
  let moduleTemplate = fs.readFileSync(
    './next.utils.component.tsx',
    'utf-8'
  )
  moduleTemplate = moduleTemplate.replace('// @ts-nocheck', '')
  if (!moduleName) {
    console.error(
      new Error('Você não especificou um nome para seu módulo.')
    )
    return
  }
  moduleTemplate = moduleTemplate
    .replaceAll('__MODULENAME__', moduleName)
    .trim()
  fs.mkdirSync(moduleFolder)
  fs.writeFileSync(`${moduleFolder}/${moduleName}.module.scss`, '')
  console.log(
    `-- "${moduleFolder}/${moduleName}.module.scss" criado com sucesso.`
  )
  fs.writeFileSync(`${moduleFolder}/${moduleName}.tsx`, moduleTemplate)
  console.log(
    `-- "${moduleFolder}/${moduleName}.tsx" criado com sucesso.`
  )

  // Import caring
  let importFile = fs.readFileSync(
    `${moduleMainFolder}/index.ts`,
    'utf-8'
  )
  importFile = importFile.replace(
    /\/\/<NEXT-BACK-AUTO-IMPORT>\/\//g,
    `export { ${moduleName} } from './${moduleName}/${moduleName}'\n//<NEXT-BACK-AUTO-IMPORT>//`
  )
  fs.writeFileSync(`${moduleMainFolder}/index.ts`, importFile)
  console.log('-- Importação automática realizada.')

}
