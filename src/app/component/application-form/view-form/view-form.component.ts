import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { ActivatedRoute } from '@angular/router';
import { ExportToCsv } from 'export-to-csv';

declare var kendo: any;

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {

  formData :any;
  qualificationArr: any = [];
  accountDeatails: any;
  mbaExist: boolean = false;
  executiveMbaExist: boolean = false;
  
  constructor(private service:ServicesService,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.activateRoute.params.subscribe((res:any) => {
      if(res.id){
        this.accountDeatails = JSON.parse(localStorage.getItem('myProfile'))
        this.getFormData(res.id)
      }
    })
  }

  getFormData(id){
    this.service.showSpinner()
    this.service.getApi(`course/get-forms-list?page=0&pagesize=10&formId=${id}&repesantativeId=${this.accountDeatails.representativeDetailsId}`,1).subscribe((res:any) => {
      if(res.body.status == 200){
        console.log("res--->>",res.body.data.formdata)
        this.formData = res.body.data.formdata
        if(this.formData.courseName.toLowerCase().includes('mba')){
          this.mbaExist = true;
          if(this.formData.courseName.toLowerCase().includes('executive')){
              this.executiveMbaExist = true;
          }
        }
      }
      this.service.hideSpinner()
    })
  }

  exportPDF(){
    console.log("download")
    kendo.drawing
      .drawDOM("#pdfcontent",
        {
          paperSize: "A5",
          margin: { top: "0.8cm", bottom: "1cm" },
          scale: 0.8,
          height: 500,          
        })
      .then(function (group) {
        kendo.drawing.pdf.saveAs(group, "Exported.pdf")
      });
    
  }

  ExportToCsv(){
    this.service.showSpinner()
    setTimeout( r => {
      this.service.hideSpinner()
    },3000)
    let data = [
      {
        FormId: this.formData.formId,
        CandidateName : this.formData.forname + this.formData.sirName,
        CourseName : this.formData.courseName,
        Duration :this.formData.duration,
        EntryYear : this.formData.dates,
        
        Title :this.formData.title,
        SurName :this.formData.sirName,
        ForeName :this.formData.forname,
        PreferredName :this.formData.preferredName,
        Gender :this.formData.gender,
        EmailID :this.formData.email,
        ConfirmedEmailID :this.formData.email,
        CountryofPermanentResidence : this.formData.permanentResidenceCountry,
        DateofBirth :this.formData.dob,
        CountryofBirth :this.formData.countryOfBirth,
        PassportNumber :this.formData.passportNumber,
        RequiredvisatostudyintheUK :this.formData.doUoyRequireVisatoStudtInTheUk,
        Ethnicity:this.formData.ethenticity,
        Disability :this.formData.disability,
        Description: this.formData.description,
        RelevantCriminalConvictions :this.formData.relevantCriminalConvictions,
        //ConvictionDescription :
        AppliedCourseName :this.formData.courseName,
        StartYear :this.formData.courseSttartDate,

        ContactCountry: this.formData.country,
        ContactState: this.formData.state,
        ContactAddress: this.formData.address,
        ContactZipcode: this.formData.zipcode,
        ContactTelephoneNumber: this.formData.telephoneNo,
        ContactMobileNumber: this.formData.phoneNo,
        ContactEmailAddress:this.formData.contactEmail,

        HomeAddress: this.formData.homeAddress,
        HomeTelephoneNo1: this.formData.homeTeliphoneNo,
        HomeTelephoneNo2: this.formData.homeTeliphoneNo2,
        HomeEmailAddress: this.formData.homeEmail,
        
        AcademicQualifications: this.formData.academicQualificationForm.academicQualifications,
        AcademicQualificationsSubject: this.formData.academicQualificationForm.subject1,
        AcademicQualificationsResult: this.formData.academicQualificationForm.resultType,
        InstitutionName: this.formData.academicQualificationForm.instituteName,
        CountryOfState: this.formData.academicQualificationForm.countryOfStudy,
        StartDate: this.formData.academicQualificationForm.startDate,
        EndDate: this.formData.academicQualificationForm.enddate,
        HighestQualification: this.formData.academicQualificationForm.highestAcademicQualification,
        Achieved: this.formData.academicQualificationForm.achieved,

        QualificationTitle: this.formData.qualificationTitle,
        Subject: this.formData.professionalQualificationSubject,
        DateAwarded: this.formData.awardedDate,
        ProfessionalBodyMembership: this.formData.professionalBodyMembership,

        Referee1Name: this.formData.referee1Name,
        Referee1Title: this.formData.referee1Title,
        Referee1Address: this.formData.referee1Address,
        Referee1TelephoneNumber: this.formData.referee1TelephoneNumber,
        Referee1EmailAddress: this.formData.referee1Email,
        Referee1Description: this.formData.aboutReference1,

        Referee2Name: this.formData.referee2Name,
        Referee2Title: this.formData.referee2Title,
        Referee2Address: this.formData.referee2Address,
        Referee2TelephoneNumber: this.formData.referee2TelephoneNumber,
        Referee2EmailAddress: this.formData.referee2Email,
        Referee2Description: this.formData.aboutReference2,
  
      },
    ]
    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Candidate Details CSV',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };
    const csvExporter = new ExportToCsv(options);
   
     csvExporter.generateCsv(data);  
  }


}
