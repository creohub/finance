const express=require('express');
const app=express();
app.use(express.json());
app.use(express.static('public'));

const workers=[{
 'Consultant Name':'Santosh Reddy Deshmukh',
 'Emp Status':'Inactive',
 'Burn Rate':'83.17',
 'Cost':'55.00'
}];

app.post('/ask',(req,res)=>{
 const q=(req.body.question||'').toLowerCase();
 const w=workers[0];
 if(q.includes('cost')) return res.json({answer:`${w['Consultant Name']}'s cost is $${w['Cost']}/hr`});
 if(q.includes('pay')||q.includes('burn')) return res.json({answer:`${w['Consultant Name']}'s pay rate is $${w['Burn Rate']}/hr`});
 if(q.includes('active')||q.includes('status')) return res.json({answer:`${w['Consultant Name']} is ${w['Emp Status']}`});
 res.json({answer:'Sample project response.'});
});

app.listen(3000,()=>console.log('Running on 3000'));
