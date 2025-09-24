import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProductsQuery } from '../services/api'
import { RootReducer } from '../store'

import * as S from './styles'

const ProdutosComponent = () => {
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }
  const { data: produtos } = useGetProductsQuery()

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
