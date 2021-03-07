import BookItem from './book-item';
import { Container,Row,Col } from 'react-bootstrap';

export default function BookList({books,hasMore,loading,error,lastBookElementRef}){
    return(
        <Container>
            <Row>
            {
                books.map((book,i)=>{
                    if(books.length===i+1){
                    return(
                        <Col key={book} xl={3} lg={4} md={6}>
                        <div ref={lastBookElementRef}>
                            <BookItem name={book}/>
                        </div>
                        </Col>
                    )
                    }
                    else{
                        return(
                        <Col key={book} xl={3} lg={4} md={6}>
                        <div>
                            <BookItem name={book}/>
                        </div>
                        </Col>
                    )
                    }
                })
            }
            <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
            <h4>
                {loading ? 'Loading Results....' : '' }
            </h4>
            <h4>
                {error ? 'Error....' : '' }
            </h4>
            </div>
                
            </Row>
        </Container>
    )
}