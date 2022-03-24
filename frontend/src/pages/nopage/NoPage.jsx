import img00 from '../../assets/nopage/00.png'

function NoPage(){
    return(
    <>
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100%', width: '100%' }}>
            <img src={img00} style={{ width: '50vw' }} alt="" />
        </div>
    </>
    );
}

export default NoPage;