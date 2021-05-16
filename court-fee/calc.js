new Vue({
  el: "#cfc",
  data: {
    sa:false,
    oa:false,
    sAmt:'',
    oAmt:'',
    sFee:'Fee:-',
    oFee:'Fee:-',
    saType:'',
    sErr:'',
    oErr:''
  },
  methods: {
oCalc: function () {
  this.oFee='Fee:-';
  this.oErr='';
  if(this.oAmt!=='')
  {
    if(this.oAmt >= 1000000)
    {
      if(this.oAmt == 1000000)
      {
          this.oFee=12000;
      }
      else if(this.oAmt > 1000000)
      {
        var i = this.oAmt-1000000;
        i = Math.floor(i/100000);
        i = i*1000;
        this.oFee = 12000+i;
      }
      if(this.oFee>=150000)
      {
        this.oFee=150000;
      }
      this.oFee="Fee:- ₹"+this.oFee+"/--"
    }
    else{
      this.oErr="⚠️ The amount can not be below 1000000 (10 Lakh)";
    }
}
else
{
  this.oErr="⚠️ The amount field can not be empty..";
}

},
sCalc: function () {
  this.sFee='Fee:-';
  this.sErr='';
  if(this.sAmt!=='')
  {
    if(this.sAmt>=100000)
    {
      if(this.saType==="Third party")
      {
          var i = Math.floor(this.sAmt/100000);
          this.sFee = i*125;
          if(this.sFee >= 50000){
            this.sFee=50000;
          }
        this.sFee="Fee:- ₹"+this.sFee+"/--"
      }
      else if (this.saType==="Borrower")
      {
        if(this.sAmt>=100000 && this.sAmt<=1000000)
        {
          var i = Math.floor(this.sAmt/100000);
          this.sFee = i*500;
        }
        else if (this.sAmt>1000000)
        {
          var i = this.sAmt-1000000;
          i=Math.floor(i/100000)
          i=i*250;
          this.sFee = 5000+i;
        }
        if(this.sFee >= 100000)
        {
          this.sFee=100000;
        }
        this.sFee="Fee:- ₹"+this.sFee+"/--"
      }
    }
    else
    {
      this.sErr="⚠️ The amount can not be below 100000 (1 Lakh) \n";
    }

    if(this.saType=='')
    {
      this.sErr=this.sErr+"⚠️ Please select whether your borrower or third party";
    }
  }
  else
  {
    this.sErr="⚠️ The amount field can not be empty..";
  }
}
}
})
