export default function BookPage(){

return(

<main className="reader">


<div className="top-reader">

<button>
← Kembali
</button>

</div>



<section className="book-header">

<img 
src="/cover.jpg"
className="cover"
/>


<h1>
Istirahatlah, Allah Tidak Pernah Pergi
</h1>


<p className="author">
Darmawaty Daud
</p>



<div className="progress">

<div className="bar"></div>

</div>

<p>
35% selesai dibaca
</p>


<button className="toc">
☰ Daftar Isi
</button>


</section>




<article className="paper">


<h2>
Kata Pengantar
</h2>


<p>
Buku ini lahir bukan dari seseorang yang selalu kuat,
melainkan dari hati yang pernah lelah, pernah bingung,
dan pernah merasa sendirian.
</p>


<p>
Namun memilih tetap bertahan bersama iman.
Istirahatlah, Allah Tidak Pernah Pergi.
</p>



<h2>
Bab 1
</h2>


<p>
Tentang lelah yang dipendam karena merasa harus kuat
di hadapan semua orang.
</p>


<p>
Ada lelah yang tidak pernah kita ceritakan.
Bukan karena tidak ada yang mau mendengar,
tetapi karena kita terlalu sering berkata:
"Aku harus kuat."
</p>



</article>



<div className="navigation">

<button>
← Bab Sebelumnya
</button>


<button>
Bab Selanjutnya →
</button>

</div>


</main>

)

}
