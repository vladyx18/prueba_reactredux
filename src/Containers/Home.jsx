import React from 'react'
import { connect } from 'react-redux'
import { Searchbar } from '../Components/Searchbar'
import { Categories } from '../Components/Categories'
import { Carousel } from '../Components/Carousel'
import CarouselItem from '../Components/CarouselItem'
import '../Assets/Sass/App.scss'

const Home = ({ mylist, trends, originals }) => {
  return (
    <div>
      <Searchbar />

      {mylist.lenght > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {mylist?.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {trends?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de PlatziVideo">
        <Carousel>
          {originals?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  }
}

export default connect(mapStateToProps, null)(Home)
