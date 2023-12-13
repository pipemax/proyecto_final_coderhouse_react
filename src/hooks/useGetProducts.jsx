import { useState } from "react"
import { getAllProducts, getProductsSearch, getProductId, getProductByCategory } from "../asyncMock"

export const useGetProducts = () => {
    const [products, setProducts] = useState([])
    const [loadingProducts, setLoadingProducts] = useState(true)
    const [errorProducts, setErrorProducts] = useState(false)

    async function getProductsBySearch(query) {
        getProductsSearch(query)
        .then(response => {
            setProducts(response)
            setLoadingProducts(false)
            setErrorProducts(false)
        })
        .catch(error => {
            setLoadingProducts(false)
            setErrorProducts(error)
        })
    }

    async function getProducts() {
        getAllProducts()
        .then(response => {
            setProducts(response)
            setLoadingProducts(false)
            setErrorProducts(false)
        })
        .catch(error => {
            setLoadingProducts(false)
            setErrorProducts(error)
        })
    }

    async function getProductById(id) {
        getProductId(id)
        .then(response => {
            setProducts(response)
            setLoadingProducts(false)
            setErrorProducts(false)
        })
        .catch(error => {
            setLoadingProducts(false)
            setErrorProducts(error)
        })
    }

    async function getProductsByCategory(categoryName) {
        getProductByCategory(categoryName)
        .then(response => {
            setProducts(response)
            setLoadingProducts(false)
            setErrorProducts(false)
        })
        .catch(error => {
            setLoadingProducts(false)
            setErrorProducts(error)
        })
    }

    return { products, loadingProducts, setLoadingProducts, errorProducts, getProductsBySearch, getProducts, getProductById, getProductsByCategory }
}