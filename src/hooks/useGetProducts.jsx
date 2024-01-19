import { useState } from "react"
import { getDocs, collection, getDoc, doc, query, where, and, or } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";  

export const useGetProducts = () => {
    const [products, setProducts] = useState([])
    const [loadingProducts, setLoadingProducts] = useState(true)
    const [errorProducts, setErrorProducts] = useState(false)
    const productsDocument = 'products';

    async function getProductsBySearch(term, category) {
        console.log(term, category)
        let dynamicQuery = query(collection(db, productsDocument), and(where('name', '>=', term), where('name', '<=', term + '~')));
        if(category) {
            dynamicQuery = query(dynamicQuery, where('category', '==', category));
        }
        const collectionRef = dynamicQuery;
        getDocs(collectionRef)
        .then(querySnapshot => {
            const productsFormated = querySnapshot.docs.map(document => {
                const fields = document.data();
                return { id: document.id, ...fields}
            });
            setProducts(productsFormated)
            setErrorProducts(false)
        })
        .catch(error => {
            setErrorProducts(error)
        })
        .finally(() => {
            setLoadingProducts(false);
        })
    }

    async function getProducts() {
        const collectionRef = collection(db, productsDocument);
        getDocs(collectionRef)
        .then(querySnapshot => {
            const productsFormated = querySnapshot.docs.map(document => {
                const fields = document.data();
                return { id: document.id, ...fields}
            });
            setProducts(productsFormated)
            setErrorProducts(false)
        })
        .catch(error => {
            setErrorProducts(error)
        })
        .finally(() => {
            setLoadingProducts(false);
        })
    }

    async function getProductById(id) {
        const productRef = doc(db, productsDocument, id);
        getDoc(productRef)
        .then(queryDocumentSnapshot => {
            const fields = queryDocumentSnapshot.data();
            const productFormated = { id: queryDocumentSnapshot.id, ...fields };
            setProducts(productFormated);
        })
        .catch(error => {
            setErrorProducts(error)
        })
        .finally(() => {
            setLoadingProducts(false);
        })
    }

    async function getProductsByCategory(categoryName) {
        const collectionRef = query(collection(db, productsDocument), where('category', '==', categoryName));
        getDocs(collectionRef)
        .then(querySnapshot => {
            const productsFormated = querySnapshot.docs.map(document => {
                const fields = document.data();
                return { id: document.id, ...fields}
            });
            setProducts(productsFormated)
            setErrorProducts(false)
        })
        .catch(error => {
            setErrorProducts(error)
        })
        .finally(() => {
            setLoadingProducts(false);
        })
    }

    return { products, loadingProducts, setLoadingProducts, errorProducts, getProductsBySearch, getProducts, getProductById, getProductsByCategory }
}