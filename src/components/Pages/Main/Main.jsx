import ItemListContainer from "./ItemListContainer";

const Main = () => {
  return (
    <main className="main">
      <div className="main__info">
        <h2 className="main__title">Nuestros Productos</h2>
        <p className="main__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quo quia a nulla vel non enim quae repellat nisi fuga assumenda ratione dicta sapiente accusantium hic, expedita, soluta atque ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis, at perferendis culpa architecto molestias neque laboriosam quam nulla quibusdam error porro obcaecati modi facere odio accusamus saepe asperiores voluptate!</p>
      </div>
      <ItemListContainer/>
    </main>
  )
};

export default Main