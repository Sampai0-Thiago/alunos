const readline = require('readline-sync')

// ========================================
// SISTEMA DE ALUNOS
// ========================================

let alunos = []

let executando = true

while (executando) {
  console.log('\n==============================')
  console.log('      SISTEMA DE ALUNOS')
  console.log('==============================')
  console.log('1 - Cadastrar aluno')
  console.log('2 - Listar alunos')
  console.log('3 - Consultar aluno')
  console.log('4 - Ver situação dos alunos')
  console.log('5 - Sair')
  console.log('==============================')

  let opcao = readline.question('Escolha uma opcao: ')

  switch (opcao) {
    // --------------------------------
    // CADASTRAR
    // --------------------------------
    case '1':
      console.log('\n--- CADASTRO DE ALUNO ---')

      let nome = readline.question('Nome: ')
      let idade = Number(readline.question('Idade: '))
      let nota = Number(readline.question('Nota: '))

      // Verificar se a nota está entre 0 e 10
      if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log('Nota invalida! A nota deve ser um numero entre 0 e 10.')
      } else {
        // Criar um objeto aluno
        let novoAluno = {
          nome: nome,
          idade: idade,
          nota: nota
        }

        // Adicionar o aluno ao array
        alunos.push(novoAluno)
        console.log('Aluno cadastrado com sucesso!')
      }

      break

    // --------------------------------
    // LISTAR
    // --------------------------------
    case '2':
      console.log('\n--- ALUNOS CADASTRADOS ---')

      // Verificar se existem alunos cadastrados
      if (alunos.length === 0) {
        console.log('Nenhum aluno cadastrado ate o momento.')
      } else {
        // Percorrer o array utilizando FOR
        for (let i = 0; i < alunos.length; i++) {
          console.log(`\nAluno ${i + 1}:`)
          console.log(`Nome: ${alunos[i].nome}`)
          console.log(`Idade: ${alunos[i].idade}`)
          console.log(`Nota: ${alunos[i].nota}`)
        }
      }

      break

    // --------------------------------
    // CONSULTAR
    // --------------------------------
    case '3':
      console.log('\n--- CONSULTAR ALUNO ---')

      let nomeBusca = readline.question('Digite o nome: ')

      let alunoEncontrado = false

      // Percorrer o array procurando pelo nome informado
      for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nome.toLowerCase() === nomeBusca.toLowerCase()) {
          console.log('\nAluno encontrado:')
          console.log(`Nome: ${alunos[i].nome}`)
          console.log(`Idade: ${alunos[i].idade}`)
          console.log(`Nota: ${alunos[i].nota}`)

          alunoEncontrado = true
          break
        }
      }

      if (!alunoEncontrado) {
        console.log('Aluno nao encontrado.')
      }

      break

    // --------------------------------
    // SITUAÇÃO
    // --------------------------------
    case '4':
      console.log('\n--- SITUACAO DOS ALUNOS ---')

      if (alunos.length === 0) {
        console.log('Nenhum aluno cadastrado para verificar a situacao.')
      } else {
        // Percorrer todos os alunos
        for (let i = 0; i < alunos.length; i++) {
          let aluno = alunos[i]
          let situacao = ''

          if (aluno.nota >= 7) {
            situacao = 'Aprovado'
          } else if (aluno.nota >= 5) {
            situacao = 'Recuperacao'
          } else {
            situacao = 'Reprovado'
          }

          console.log(
            `${aluno.nome} - Nota: ${aluno.nota} - Situacao: ${situacao}`
          )
        }
      }

      break

    // --------------------------------
    // SAIR
    // --------------------------------
    case '5':
      console.log('\nSistema encerrado!')

      executando = false

      break

    // --------------------------------
    // OPÇÃO INVÁLIDA
    // --------------------------------
    default:
      console.log('\nOpcao invalida!')

      break
  }
}
