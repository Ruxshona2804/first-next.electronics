import Image from "next/image";

// Функция для загрузки данных о продукте
async function getProduct(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error("Ошибка загрузки продукта");
    return res.json();
}

// Динамическая страница для каждого продукта
export default async function ProductDetail({ params }) {
    const product = await getProduct(params.id);

    return (
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 flex justify-center">
                <Image src={product.thumbnail} alt={product.title} width={500} height={500} className="rounded-lg shadow-lg" />
            </div>
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold text-orange-600">{product.title}</h1>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">{product.description}</p>
                <p className="mt-4 text-xl text-gray-900 font-semibold">Price: <span className="text-orange-500">${product.price}</span></p>
                <p className="mt-2 font-bold text-gray-600">Rating: ⭐ {product.rating}</p>
                <p className="mt-2 font-bold text-gray-600">Category: {product.category}</p>
                <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-orange-600 transition">Добавить в корзину</button>
            </div>
        </div>
    );
}
