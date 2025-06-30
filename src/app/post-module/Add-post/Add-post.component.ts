import { AfterContentInit, Component, OnInit, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic, SimpleUploadAdapter,
  Link, Image, Table, ImageUpload,
  Heading,List,IndentBlock,
  BlockQuote,Alignment,
  FontFamily,
  Autosave,
  HorizontalLine,
  Watchdog,
  HeadingButtonsUI,
  ParagraphButtonUI,ImageUploadEditing,ImageUploadUI,ImageUploadProgress,
  EditorConfig,Indent,FontSize,Autoformat,
  EditorWatchdog,
  Input
 } from 'ckeditor5';
import { environment } from 'src/environments/environment';
import { ApicallService } from 'src/app/core/apicall.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { map, Observable, Subscriber } from 'rxjs';
import { error } from 'console';
import { Post } from 'src/app/interface/post';
import { Input as InputContent } from '@angular/core';
import { state } from '@angular/animations';
function generateList() {
  let list = []
  let size = 60
  for(let x=8; x < size; x += 2) {
    list.push(x)
  };
  return list
}

export function cleanedData<T>(data:any, keys: (keyof T)[]): T {
  const cleanData: Partial<T> = {};
  for(const key of keys) {
    if(data.hasOwnProperty(key)) {
      cleanData[key] = data[key]
    }
  }
  return cleanData as T;
}

@Component({
  selector: 'app-Add-post',
  templateUrl: './Add-post.component.html',
  styleUrls: ['./Add-post.component.css'],
  encapsulation: ViewEncapsulation.None

})

export class AddPostComponent implements OnInit{

  @InputContent() readOnly!: boolean;
  @InputContent() data = '<h1><strong>Title of post</strong></h1> <p>Content of Post </p>';
  @InputContent() titleOfcontent? : string;
  @InputContent() titlePage? : string = "Publish Another Post";

  tagName = 'Textarea';
  formPostBuilder : FormGroup = this.formBuilder.group({
      title: [{ value: this.titleOfcontent }, [Validators.minLength(3)]],
      content: '',
    })
  
  public Editor = ClassicEditor;
  public config: EditorConfig = {
    licenseKey : environment.textEditorLicence,
    plugins: [ 
      Essentials, Paragraph, Bold,Italic,Image, SimpleUploadAdapter,
      Link, Table,ImageUpload,Heading, List,Indent,IndentBlock,Alignment,
      FontSize,FontFamily,Autosave,Autoformat, HeadingButtonsUI,ParagraphButtonUI,
      ImageUploadEditing,ImageUploadUI,ImageUploadProgress,HorizontalLine,BlockQuote
    ],
    toolbar: [
      'undo', 'redo','alignment', '|','bold', 'italic','|',
      'link','imageUpload','|','insertTable', 'insertTableLayout','|',
      'heading', 'fontFamily', 'fontSize', '|','autoformat',
      'bulletedList', 'numberedList', 'indent', 'outdent', '|',
      'blockQuote', 'horizontalLine',
		],
    heading: {
      options: [
          { model: 'paragraph',title: 'Paragraph', class: 'ck-heading_paragraph' },
          { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
          { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
      ]
    },
    indentBlock: {
      offset: 1,
      unit: 'em'
    },
    /* simpleUpload: {
      // The URL that the images are uploaded to.
      uploadUrl: 'http://example.com',

      // Enable the XMLHttpRequest.withCredentials property.
      withCredentials: true,

      // Headers sent along with the XMLHttpRequest to the upload server.
      headers: {
          'X-CSRF-TOKEN': 'CSRF-Token',
          Authorization: 'Bearer <JSON Web Token>'
      },
    }, */
    image: {
      upload : {
        types : ['png', 'jpeg']
      }
    },
  fontSize: {
    options: generateList(),
    supportAllValues: true
},

    
  };

  constructor(private apicallService:ApicallService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formPostBuilder.get('title')?.setValue(this.titleOfcontent);
    this.formPostBuilder.get('content')?.setValue(this.data);
    this.formPostBuilder.get('title')?.disable();
  }

  get title():any {
    return this.formPostBuilder.get('title');
  }
  get content():any {
    return this.formPostBuilder.get('content');
  }

  
  public savePost(){
    let data = this.formPostBuilder.value;
    return this.apicallService.newPost(data)
    .pipe(
      map(res => {
        let postKeys: (keyof Post)[] = ['id','blog','title', 'content', 'author','published', 'updated'];
        return cleanedData<Post>(res, postKeys);
      })
    )
    .subscribe(
      {
        next(data) {
          console.log(data)
        },
        error(err) {
          console.log(err)
        }
      }
    )
    
    
    /* .then(
      res => {
        console.log("success");
        console.log(res);
      }
    )
    
    ); */
  }





  

}
