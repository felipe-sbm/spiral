class ContactsController < ApplicationController
    def new
      @contact = ContactForm.new
    end
  
    def create
      @contact = ContactForm.new(contact_params)
      if @contact.deliver
        flash[:notice] = "Sua mensagem foi enviada."
        redirect_to new_contact_path
      else
        render :new
      end
    end
  
    private
  
    def contact_params
      params.require(:contact_form).permit(:name, :email, :message)
    end
end
  