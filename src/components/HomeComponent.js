import React from 'react';
import { Card, CardText, CardImg, CardSubtitle, CardTitle, CardBody} from 'reactstrap';

function RenderCard({x}){
    return (
        <div>
          <Card>
            <CardImg top width="100%" src={x.image} alt={x.name} />
            <CardBody>
              <CardTitle>{x.name}</CardTitle>
              {x.designation ? <CardSubtitle>{x.designation}</CardSubtitle>: null}
              <CardText>{x.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
}


function Home(props){
    return(
        <div className = "container">
            <div className="row align-items-start">
                <div className="col-12 col-md mt-1"><RenderCard x={props.dish}/></div>
                <div className="col-12 col-md mt-1"><RenderCard x={props.promotion}/></div>
                <div className="col-12 col-md mt-1"><RenderCard x={props.leader}/></div>
            </div>
        </div>
    );
}

export default Home;