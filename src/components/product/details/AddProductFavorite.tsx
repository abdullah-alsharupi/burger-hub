import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useLocalSearchParams } from 'expo-router';

import { useSessionStore } from '@/src/store/useSessionStore';
import { useCustomToast } from '@/src/hooks/useCustomToast';
import { useGetFavoriteproductssByUserIdWithproductsId } from '@/src/queries/products/getProductFavoriteById';
import { insertProductFavorite } from '@/src/mutations/product/insertProductFavorite';
import { deleteProductFavorite } from '@/src/mutations/product/deleteProductFavorite';
 
function AddProductsFavorite() {
    const { id } = useLocalSearchParams();
    const { session } = useSessionStore();
    const showToast = useCustomToast();
    const userId = session?.id || '';

    console.log("Favorite product:", id, userId);

    // Fetch favorite products
    const { data: favorite, refetch, isFetching, isFetchedAfterMount } =
        useGetFavoriteproductssByUserIdWithproductsId(id as string, userId);

    // Local state for immediate UI update
    const [isFavorite, setIsFavorite] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (favorite) {
            setIsFavorite(favorite.length > 0);
        }
    }, [favorite]);

    const handleFavoriteToggle = async () => {
        if (!id || !userId) return;

        try {
            setLoading(true);
            if (isFavorite) {
                await deleteProductFavorite(id as string, userId);
                 showToast("Removed from favorites", { type: "warning" });
                setIsFavorite(false); // Update state immediately
            } else {
                await insertProductFavorite(id as string, userId);
                 showToast("Added to favorites!", { type: "success" });
                setIsFavorite(true); // Update state immediately
            }
          await refetch() // Sync with backend
        } catch (error) {
            console.error("Error toggling favorite:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) refetch();
    }, [id]);

    return (
        <>
            {(isFetching || loading) && <ActivityIndicator size="small" color="#AF042C" />}

            {isFetchedAfterMount && (
                isFavorite ? (
                    <AntDesign name="heart" size={30} onPress={handleFavoriteToggle} color="#AF042C" />
                ) : (
                    <EvilIcons name="heart" size={40} color="black" onPress={handleFavoriteToggle} />
                )
            )}
        </>
    );
}

export default AddProductsFavorite;
