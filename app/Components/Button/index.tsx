

export default function Button (params:any) {
    return(
        <div className={params.class ? `${params.class}`:'brands-button-more'}>
            {params.text}
        </div>
    )
}
