import React, { useContext } from 'react';
import { AppContext } from './../AppContext';
import Grid from '@material-ui/core/Grid';
import ImgComponent from '../components/imageComponent'


export const Photos = () => {

    let {addFavorite, photos} = useContext(AppContext);

    const RenderPhotos = () => {

        if (photos) {
            return (
                photos.map((item, ind) => {
                    return (
                        <Grid item md={4} key={ind} >
                            <ImgComponent item={item} />

                        </Grid>

                    )
                })
            )

        }
        else return (
            <h1>Loading..</h1>
        )
    }

    return (
        <div>
            <Grid container spacing={3} >

                <RenderPhotos />

            </Grid>
        </div>

    )
}