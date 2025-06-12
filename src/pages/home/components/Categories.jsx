import "./Categories.css"

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Món chính",
      image: "/placeholder.svg?height=200&width=200",
      description: "Các món ăn chính đầy đủ dinh dưỡng",
    },
    {
      id: 2,
      name: "Salad & Soup",
      image: "/placeholder.svg?height=200&width=200",
      description: "Salad tươi mát và soup bổ dưỡng",
    },
    {
      id: 3,
      name: "Đồ uống",
      image: "/placeholder.svg?height=200&width=200",
      description: "Nước ép tự nhiên và smoothie",
    },
    {
      id: 4,
      name: "Tráng miệng",
      image: "/placeholder.svg?height=200&width=200",
      description: "Bánh ngọt và món tráng miệng chay",
    },
  ]

  return (
    <section className="categories">
      <div className="categories-container">
        <h2>Danh mục sản phẩm</h2>
        <p>Khám phá các loại thực phẩm chay đa dạng của chúng tôi</p>

        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image">
                <img src={category.image || "/placeholder.svg"} alt={category.name} />
              </div>
              <div className="category-content">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <button className="category-btn">Xem thêm</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
