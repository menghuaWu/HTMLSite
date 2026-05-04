<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page import="java.io.*"%>
<%@ page import="org.apache.commons.fileupload.*"%>
<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@ page import="org.apache.commons.fileupload.util.Streams"%>
<%@ page import="org.apache.commons.io.FilenameUtils"%>
<%
    //String saveDirectory = application.getRealPath("/upload");
    // Change save direcoty to another place outside of Tomcat
    //String saveDirectory = "C:/upload";
   //String saveDirectory = "\\\\10.0.204.140\\DocServer\\attachment\\d3\\x7\\fx\\58\\c1\\ed\\bf\\19\\ex\\3d\\fa\\22";
    String saveDirectory = "\\\\10.0.204.140\\DocServer"; //主目錄
    File dir = new File(saveDirectory);
    if (!dir.exists()) {
    	boolean success = dir.mkdir();
        if (success) {
            System.out.println("Directory: " + saveDirectory + " created");
        } 
    }
    
    out.println("file.encoding=" + System.getProperty("file.encoding") + "<br>");
        
    // Solve Chinese filename problem: use original form encoding
    String encoding = "UTF-8";
    request.setCharacterEncoding(encoding);
    
    // Check that we have a file upload request
    boolean isMultipart = ServletFileUpload.isMultipartContent(request);
    out.println("isMultipart=" + isMultipart + "<br>");
    
    // Create a new file upload handler
    ServletFileUpload upload = new ServletFileUpload();

    //Create a progress listener
    ProgressListener progressListener = new ProgressListener(){
       private long megaBytes = -1;
       public void update(long pBytesRead, long pContentLength, int pItems) {
           long mBytes = pBytesRead / 1000000;
           if (megaBytes == mBytes) {
               return;
           }
           megaBytes = mBytes;
           System.out.println("We are currently reading item " + pItems);
           if (pContentLength == -1) {
               System.out.println("So far, " + pBytesRead + " bytes have been read.");
           } else {
               System.out.println("So far, " + pBytesRead + " of " + pContentLength
                                  + " bytes have been read.");
           }
       }
    };
    upload.setProgressListener(progressListener);

    // Parse the request
    FileItemIterator iter = upload.getItemIterator(request);
    String filenameSaved = null;
	String fileSavePath = null;
	String file_location = null;
	String newfileName= null;
    while (iter.hasNext()) {
        FileItemStream item = iter.next();
        String name = item.getFieldName();
        InputStream stream = item.openStream();        
        if (item.isFormField()) { //判斷是檔案還是文字
            String value = Streams.asString(stream, encoding);
            out.println(name + "=" + value + "<br>");
            if ("FILE_NAME".equals(name)) {
				//filenameSaved =value;
            	filenameSaved =java.net.URLDecoder.decode(value, "UTF-8") ;
            	System.out.println(name + "=" + value);
            }
			else if ("FILE_LOCATION".equals(name)) {
				
				file_location = java.net.URLDecoder.decode(value, "UTF-8");
				file_location=file_location.replace("/","\\");
				fileSavePath =saveDirectory+file_location;
            	 out.println("file Save Path=" + fileSavePath+ "<br>");
            }

        } else {
            System.out.println("File field " + name + " with file name "
                + item.getName() + " detected.");
            // Process the input stream
            String fieldName = item.getFieldName();
            String fileName = item.getName();
            String contentType = item.getContentType();
            out.println("fieldName=" + fieldName + "<br>");
            out.println("fileName=" + fileName + "<br>");
            out.println("contentType=" + contentType + "<br>");
            if (fileName != null && !"".equals(fileName)) {
                fileName = FilenameUtils.getName(fileName);                
                if (filenameSaved != null && !"".equals(filenameSaved) && !filenameSaved.equals(fileName)) {
                	fileName = filenameSaved;
                }
                out.println("fileName saved=" + fileName + "<br>");
               File uploadedFile = new File(fileSavePath, fileName);
			 //  File uploadedFile = new File(saveDirectory, fileName);
			   
                FileOutputStream uploadedFileStream = 
                    new FileOutputStream(uploadedFile);
                Streams.copy(stream, uploadedFileStream, true);
            }
        }
    }    
%>
<input type="button" name="prev" value="Go back to previous page" onclick="history.go(-1);"/>