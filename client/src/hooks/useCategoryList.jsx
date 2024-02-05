import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pending, success, fail} from "../redux/categories/categories";

export default function useCategories() {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.categories)

    useEffect(() => {
        dispatch(pending());
        try {
            (async () => {
                const url = 'http://localhost:3001/api/categories';
                const response = await fetch(url);
                const data = await response.json();
                dispatch(success(data));
            })();
        } catch(error) {
            dispatch(fail(error))
        }
    }, []);
    return categories;
}